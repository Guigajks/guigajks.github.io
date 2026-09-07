# 0009 — Margens `@page` em todas as páginas

- **Estado:** Aceite
- **Data:** 2026-07-28
- **Pedido:** margem no topo de cada nova página
- **Origem:** [Margens do PDF](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

O padding estava só no contentor `.print-page`, por isso a primeira página tinha folga e as seguintes colavam ao topo.

## Decisão

Usar `@page { margin: 12mm 10mm; }` em `print.css` e tirar o padding do contentor. O Playwright gera o PDF com `preferCSSPageSize: true` e margens internas a zero.

## Consequências

- Topo, laterais e fundo valem em **todas** as páginas impressas.
- Alterar a margem é mudar o `@page`, não o script.
