# 0006 — Preview na 4322 e espera estável

- **Estado:** Aceite
- **Data:** 2026-07-28
- **Pedido:** corrigir o download do CV
- **Origem:** [Correção do download](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

`generate-pdf.mjs` subia um preview na porta 4321 — a mesma do `astro dev`. Além disso, `waitUntil: "networkidle"` pendurava nas Google Fonts.

## Decisão

- Preview do PDF na porta **4322**.
- Navegar com `waitUntil: "load"`, esperar `document.fonts.ready` e 500 ms extra.
- `preferCSSPageSize: true` e margens Playwright a zero, para as margens virem do CSS (ver [0009](0009-margens-pagina-impressao.md)).

## Consequências

- `npm run pdf` pode correr com o `dev` ligado.
- A geração não depende de a rede das fontes ficar idle.
- O script mata o preview no `finally` (SIGTERM, depois SIGKILL).
