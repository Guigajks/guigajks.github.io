# 0002 — Conteúdo num YAML validado com Zod

- **Estado:** Aceite
- **Data:** 2026-07
- **Origem:** arquitetura inicial do repositório

## Contexto

Textos EN/PT, experiência, contacto e skills mudam com frequência. Espalhá-los pelos componentes tornaria cada atualização frágil.

## Decisão

Toda a cópia vive em `src/data/cv.yaml`. `src/data/cv.ts` faz parse com `yaml` e valida com um schema **Zod**. Os componentes só leem o objeto `cv` e a função `t()`.

## Consequências

- Atualizar o CV = editar um ficheiro (`README` aponta para isso).
- Schema inválido falha no build, não em runtime no browser.
- Campos localizados usam `{ en, pt }`; stacks e nomes de empresa ficam sem tradução.
- UI (rótulos de secção, botões) fica em `src/i18n/ui.ts`, separado do currículo.
