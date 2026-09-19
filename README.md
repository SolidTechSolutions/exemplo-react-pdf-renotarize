# 🇧🇷 SolidSign API - Front-end de Exemplo: Renotarização (DocTimeStamp) PDF (React)

## Como funciona

"Via example backend" (padrão) chama `POST /api/pdf/renotarize/form` no back-end de exemplo (`http://localhost:8100`), que repassa pra `POST /solidsign/dsig/extending/pdf/add-doctimestamp` da SolidSign API. "Direct to SolidSign API" (opcional) chama a API direto do navegador — só pra teste manual.

## Requisitos

Rode este back-end de exemplo localmente:

- **Java**: [`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize)

- Um token JWT válido (`POST /solidsign/auth/token`)

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`, preencha o formulário e envie.

## Variáveis do formulário

| Campo | Significado | Default |
|---|---|---|
| `mode` | Via backend de exemplo (padrão) ou direto à API | `backend` |
| `backendUrl` | URL do back-end de exemplo | `http://localhost:8100` |
| `authorization` | Token JWT (Bearer) | (vazio) |
| `documents` | Documento(s) a carimbar | (vazio) |
| `hashAlgorithm` | Algoritmo de hash | `SHA256` |
| `reason / location / contact` | Metadados do carimbo (opcionais) | (vazio) |

---

# 🇬🇧 SolidSign API - Example Front-end: PDF Renotarization (DocTimeStamp) (React)

## How it works

"Via example backend" (default) calls `POST /api/pdf/renotarize/form` on the example backend (`http://localhost:8100`), which forwards to `POST /solidsign/dsig/extending/pdf/add-doctimestamp` on the SolidSign API. "Direct to SolidSign API" (optional) calls the API straight from the browser — for quick manual testing only.

## Requirements

Run this example backend locally:

- **Java**: [`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize)

- A valid JWT token (`POST /solidsign/auth/token`)

## Running

```bash
npm install
npm run dev
```

Open `http://localhost:5173`, fill in the form and submit.

## Form fields

| Field | Meaning | Default |
|---|---|---|
| `mode` | Via example backend (default) or direct to API | `backend` |
| `backendUrl` | Example backend URL | `http://localhost:8100` |
| `authorization` | JWT (Bearer) token | (empty) |
| `documents` | Document(s) to timestamp | (empty) |
| `hashAlgorithm` | Hash algorithm | `SHA256` |
| `reason / location / contact` | Timestamp metadata (optional) | (empty) |
