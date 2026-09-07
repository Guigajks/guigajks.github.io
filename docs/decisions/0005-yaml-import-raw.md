# 0005 — Importar YAML com `?raw`

- **Estado:** Aceite
- **Data:** 2026-07-28
- **Pedido:** corrigir o download do CV
- **Origem:** [Correção do download](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

O download falhava com 404 porque os PDFs não existiam. `npm run pdf` depende de `astro build`, e o build quebrava: `cv.ts` lia `cv.yaml` com `readFileSync` + `fileURLToPath`, caminho que o bundler do Astro não resolvia.

## Decisão

Importar o YAML como texto via Vite: `import yamlText from "./cv.yaml?raw"`. Declarar o módulo em `src/env.d.ts`.

## Consequências

- O build inclui o YAML no grafo de módulos; alterações disparam rebuild.
- Já não há I/O de ficheiro em tempo de compilação do Astro.
- Sem este import, `npm run pdf` não consegue gerar os anexos.
