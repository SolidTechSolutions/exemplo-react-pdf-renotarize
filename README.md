# SolidSign API - Example Front-end: PDF Renotarization (React)

Example front-end for adding a new DocTimeStamp (renotarization) to a PDF —
extends its proof of existence without requiring a signing certificate.
Visual stamp positioning is intentionally not covered here (see the PDF
signing examples for that). By default it talks to the
[`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize)
example backend, which keeps the API credentials server-side — the
recommended integration pattern. An optional "Direct to SolidSign API" mode
lets you call the API straight from the browser, useful for a quick manual
check, but it exposes the token in the browser.

## How it works

- **Default mode (backend)**: `POST http://localhost:8100/api/pdf/renotarize/form`.
- **Optional mode (direct)**: `POST {baseUrl}/solidsign/dsig/extending/pdf/add-doctimestamp`, with the token entered in the form.

## Prerequisites

1. Run the [`exemplo-integracao-pdf-renotarize`](https://github.com/SolidTechSolutions/exemplo-integracao-pdf-renotarize) backend locally (`mvn spring-boot:run`, default port `8100`) — or, for direct mode, have a valid JWT token.
2. One or more PDFs to renotarize.

## Running

```bash
npm install
npm run dev
```

Open `http://localhost:5173`, upload the PDF(s) and renotarize.
