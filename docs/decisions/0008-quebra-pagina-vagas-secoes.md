# 0008 — Vaga/secção não parte entre páginas

- **Estado:** Aceite
- **Data:** 2026-07-28
- **Pedido:** a vaga não deve partir em duas páginas; aplicar o mesmo às secções se couber
- **Origem:** [Quebra de página no PDF](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

No PDF, uma vaga começava no fim de uma página e continuava na seguinte.

## Decisão

- Cada `.print-job` usa `break-inside: avoid` (e o equivalente `page-break-inside`).
- Secções compactas (formação, skills, certificações) usam `print-section--keep`.
- Títulos de secção e de vaga usam `break-after: avoid`, para não ficarem sozinhos no fundo da página.
- A secção de experiência **não** fica `keep` no bloco inteiro: é maior que uma página A4.

## Consequências

- Se a vaga não cabe no espaço que resta, vai inteira para a página seguinte (pode deixar um vazio no fim da anterior).
- Empregos muito longos, se um dia excederem uma página, o browser pode ignorar o `avoid`.
