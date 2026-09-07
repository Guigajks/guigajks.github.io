# 0001 — Astro como site estático

- **Estado:** Aceite
- **Data:** 2026-07
- **Origem:** arquitetura inicial do repositório

## Contexto

O CV precisa de um site público, rápido de atualizar e fácil de hospedar, sem backend nem base de dados.

## Decisão

Usar **Astro 5** com TypeScript estrito (`astro/tsconfigs/strict`), output estático e `trailingSlash: never`. A raiz `/` redireciona para `/en`.

## Consequências

- O conteúdo é HTML estático em `dist/` (`npm run build`).
- Não há CMS, API nem runtime de servidor.
- Componentes `.astro` isolam cada bloco do CV (Hero, Experience, Aside, etc.).
- Tipografia via Google Fonts (Fraunces + Outfit).
