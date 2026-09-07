# 0010 — Skills & interests no aside

- **Estado:** Aceite
- **Data:** 2026-09-07
- **Pedido:** mover a secção Skills & interests para o aside
- **Origem:** [Skills no aside](8db146ca-6240-4cf5-a2e2-85aa45602bb7)

## Contexto

Skills, idiomas e hobbies ocupavam a coluna principal, a seguir à formação, e competiam com a experiência.

## Decisão

`Skills` deixa o `main` e passa a renderizar-se no `Aside`, a seguir a Details, com o mesmo visual da coluna lateral. No desktop o aside é sticky e faz scroll interno se passar da viewport. No telemóvel o aside continua acima da experiência (`order: -1`).

## Consequências

- A coluna principal fica: experiência, formação, certificações, contacto.
- O PDF de impressão **não** mudou este agrupamento: skills continuam numa secção própria no layout print.
- No mobile, `.aside-skills { display: contents }` para skills, idiomas e hobbies entrarem na grelha de duas colunas do aside.
