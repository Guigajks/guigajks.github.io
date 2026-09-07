# 0011 — Secção de certificações no site e no PDF

- **Estado:** Aceite
- **Data:** 2026-09-07
- **Pedido:** criar a secção e incluir o certificado Vue.js
- **Origem:** [Secção de certificações](0aa44e7e-45f7-42f5-8f43-8f9565b6929b)

## Contexto

Havia formação académica mas nenhuma certificação profissional no CV. O certificado Vue.js Developer Level I (certificates.dev / Vue School) foi anexado.

## Decisão

- Schema e dados em `cv.yaml` → `certifications[]` (nome, credencial, emissor, data, descrição, id, URL de verificação, PDF, imagem).
- Componente `Certifications.astro` no `main`, a seguir à formação.
- No site: preview da imagem, **Ver certificado** (PDF em `public/certificates/`) e **Verificar credencial** (página oficial).
- No print: texto + número + URL; sem imagem nem botões.
- Na impressão da página web (`@media print` em `global.css`), esconder preview e ações.

Primeira entrada: Certified Mid-Level Vue.js Developer / CMVD-009271 / 27 de agosto de 2026.

## Consequências

- Novas certificações = novo item no YAML + ficheiros em `public/certificates/`.
- Regenerar os PDFs de download (`npm run pdf`) depois de acrescentar entradas, senão o anexo fica desatualizado.
- A imagem de preview é um PNG gerado a partir do PDF; o PDF original permanece o documento oficioso.
