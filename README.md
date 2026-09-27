# 🇧🇷 SolidSign API - Front-end de Exemplo: Renotarização (DocTimeStamp) PDF (React)

## Como funciona

"Via example backend" (padrão) chama `POST /api/pdf/renotarize/form` no back-end de exemplo (`http://localhost:8100`), que repassa pra `POST /solidsign/dsig/extending/pdf/add-doctimestamp` da SolidSign API. "Direct to SolidSign API" (opcional) chama a API direto do navegador — só pra teste manual.

## Requisitos

Rode **um** destes back-ends de exemplo localmente (portas diferentes — ajuste `backendUrl` no formulário pra combinar):

- **Java** (porta 8100): [`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize)
- **C#** (porta 5097): [`exemplo-csharp-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-csharp-integracao-pdf-renotarize)
- **JavaScript** (porta 8099): [`exemplo-javascript-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-pdf-renotarize)
- **TypeScript** (porta 8099): [`exemplo-typescript-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-typescript-integracao-pdf-renotarize)
- **Node.js** (porta 3099): [`exemplo-nodejs-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-pdf-renotarize)
- **PHP** (porta 8099): [`exemplo-php-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-php-integracao-pdf-renotarize)
- **Python** (porta 8099): [`exemplo-python-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-python-integracao-pdf-renotarize)

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

Run **one** of these example backends locally (different ports — adjust `backendUrl` in the form to match):

- **Java** (port 8100): [`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize)
- **C#** (port 5097): [`exemplo-csharp-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-csharp-integracao-pdf-renotarize)
- **JavaScript** (port 8099): [`exemplo-javascript-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-javascript-integracao-pdf-renotarize)
- **TypeScript** (port 8099): [`exemplo-typescript-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-typescript-integracao-pdf-renotarize)
- **Node.js** (port 3099): [`exemplo-nodejs-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-nodejs-integracao-pdf-renotarize)
- **PHP** (port 8099): [`exemplo-php-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-php-integracao-pdf-renotarize)
- **Python** (port 8099): [`exemplo-python-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-python-integracao-pdf-renotarize)

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
