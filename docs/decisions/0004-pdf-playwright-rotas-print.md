# 0004 — PDF via Playwright a partir de rotas `/print`

- **Estado:** Aceite
- **Data:** 2026-07
- **Origem:** arquitetura inicial; reforçada em [Correção do download](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

Candidaturas pedem PDF anexável. Gerar no cliente (print do browser da página web) daria um layout diferente do site e dependeria do utilizador.

## Decisão

Manter um layout de impressão dedicado (`PrintLayout` + `PrintCv` + `print.css`) nas rotas `/print/en` e `/print/pt`. O script `scripts/generate-pdf.mjs` abre essas rotas no Chromium (Playwright) e grava A4 em `public/`. O botão **Download CV / Baixar CV** aponta para o ficheiro estático do idioma ativo.

## Consequências

- O site e o PDF partilham dados (`cv.yaml`) mas não o mesmo layout.
- Os PDFs têm de ser regenerados com `npm run pdf` depois de mudar conteúdo ou CSS de impressão.
- Playwright é `devDependency`; o Chromium precisa de estar instalado (`npx playwright install chromium`).
- Nomes dos ficheiros: `Luiz_Guilherme_das_Chagas_CV_EN.pdf` e `…_PT.pdf`.
