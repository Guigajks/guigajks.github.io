# 0003 — Bilingue EN/PT por rotas

- **Estado:** Aceite
- **Data:** 2026-07
- **Origem:** arquitetura inicial do repositório

## Contexto

Candidaturas em Portugal e no estrangeiro exigem as duas línguas, com URLs estáveis e um seletor visível.

## Decisão

Locales `en` e `pt` como rotas (`/en`, `/pt`, `/print/en`, `/print/pt`). O seletor `LangToggle` troca o prefixo. O idioma por omissão do site é inglês (`/` → `/en`).

## Consequências

- Cada página é um `.astro` fino que só passa `locale` a `CvPage` ou `PrintCv`.
- O atributo `lang` do HTML segue o locale.
- Download, rótulos e textos do YAML mudam juntos com o idioma ativo.
