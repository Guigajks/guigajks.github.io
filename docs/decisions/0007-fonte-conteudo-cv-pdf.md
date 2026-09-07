# 0007 — Conteúdo alinhado ao PDF mais recente

- **Estado:** Aceite
- **Data:** 2026-07-28
- **Pedido:** atualizar o site a partir de `Luiz Guilherme das Chagas.pdf`
- **Origem:** [Atualização do conteúdo](9fb88326-8b26-4a6e-bb4f-0f2263561d79)

## Contexto

O YAML estava desatualizado face ao CV enviado para candidaturas.

## Decisão

Tratar o PDF mais recente do autor como fonte de verdade do conteúdo e espelhá-lo em `cv.yaml` (EN + PT):

- Cargo: Frontend Engineer / Engenheiro Frontend
- Localização: Lisboa
- Experiência: Nearshore/EnBW, Aubay (TLS Contact e Celfocus), FLOW, Iterative, Risknow.ai, Agilus
- Formação: Engenharia de Computação, Senac, 2015–2019
- Skills alinhadas às stacks das vagas

## Consequências

- Mudanças de carreira entram primeiro no YAML (e, se houver um PDF externo novo, esse PDF volta a ser a referência).
- Os PDFs gerados pelo site são derivados deste YAML, não o contrário.
