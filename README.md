# CV — Luiz Guilherme das Chagas

Site bilingue (EN/PT) em Astro com conteúdo editável e geração de PDF para candidaturas.

## Setup

```bash
npm install
npx playwright install chromium
```

## Atualizar o CV

Edite um único arquivo:

- [`src/data/cv.yaml`](src/data/cv.yaml)

Ali ficam contato, experiências, formação, skills, hobbies e textos EN/PT.

## Desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:4321/en` ou `/pt`.

## Gerar PDFs

```bash
npm run pdf
```

Isso faz o build e gera:

- `public/Luiz_Guilherme_das_Chagas_CV_EN.pdf`
- `public/Luiz_Guilherme_das_Chagas_CV_PT.pdf`

Use esses arquivos para anexar em candidaturas. O botão **Download CV / Baixar CV** no site aponta para o PDF do idioma ativo.

## Scripts

| Comando | Função |
| --- | --- |
| `npm run dev` | Site local |
| `npm run build` | Build estático em `dist/` |
| `npm run preview` | Preview do build |
| `npm run pdf` | Build + gera PDFs EN e PT |
