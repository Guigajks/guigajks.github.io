import { spawn } from "node:child_process";
import { mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");
// Avoid clashing with `astro dev` (default 4321)
const port = 4322;
const base = `http://127.0.0.1:${port}`;

const outputs = [
  { route: "/print/en", file: "Luiz_Guilherme_das_Chagas_CV_EN.pdf" },
  { route: "/print/pt", file: "Luiz_Guilherme_das_Chagas_CV_PT.pdf" },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {
      // retry
    }
    await wait(250);
  }
  throw new Error(`Preview server did not start at ${url}`);
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error("dist/ not found. Run `npm run build` first (or use `npm run pdf`).");
  }

  await mkdir(publicDir, { recursive: true });

  const preview = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["astro", "preview", "--host", "127.0.0.1", "--port", String(port)],
    {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
      shell: process.platform === "win32",
    }
  );

  let previewLog = "";
  preview.stdout.on("data", (chunk) => {
    previewLog += chunk.toString();
  });
  preview.stderr.on("data", (chunk) => {
    previewLog += chunk.toString();
  });

  try {
    await waitForServer(`${base}/print/en`);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const item of outputs) {
      const url = `${base}${item.route}`;
      console.log(`Generating ${item.file} from ${url}`);
      await page.goto(url, { waitUntil: "load", timeout: 60_000 });
      // Wait for webfonts (networkidle can hang on Google Fonts)
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
      });
      await wait(500);
      const publicPath = path.join(publicDir, item.file);
      await page.pdf({
        path: publicPath,
        format: "A4",
        printBackground: true,
        // Page margins come from CSS @page (applies to every printed page)
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
        preferCSSPageSize: true,
      });
      const distPath = path.join(distDir, item.file);
      await copyFile(publicPath, distPath);
      console.log(`Saved ${publicPath}`);
    }

    await browser.close();
  } finally {
    preview.kill("SIGTERM");
    // Ensure process exits even if preview hangs
    await wait(300);
    if (!preview.killed) preview.kill("SIGKILL");
  }

  if (previewLog.includes("Error")) {
    console.warn(previewLog);
  }

  console.log("PDFs ready. Attach the EN or PT file when applying for jobs.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
