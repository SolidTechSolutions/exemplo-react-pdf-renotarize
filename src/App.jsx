import { useState } from 'react';
import './App.css';

// Example front-end for adding a new DocTimeStamp (renotarization) to a PDF —
// extends its proof of existence without requiring a signing certificate.
//
// Two modes:
// - "backend" (default): talks to the local example backend
//   (exemplo-integracao-pdf-renotarize, POST /api/pdf/renotarize/form). The
//   API token stays server-side — never exposed to the browser.
// - "direct" (optional): calls the SolidSign API directly from the browser.
//   Convenient for a quick manual check, but it exposes the Bearer token.

const DEFAULT_BACKEND_URL = 'http://localhost:8100';

export default function App() {
  const [mode, setMode] = useState('backend');
  const [backendUrl, setBackendUrl] = useState(DEFAULT_BACKEND_URL);
  const [baseUrl, setBaseUrl] = useState('https://www.solidsign.com.br');
  const [authorization, setAuthorization] = useState('');
  const [documents, setDocuments] = useState([]);
  const [hashAlgorithm, setHashAlgorithm] = useState('SHA256');
  const [reason, setReason] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (documents.length === 0) { setError('Select at least one PDF.'); return; }
    if (mode === 'direct' && !authorization.trim()) { setError('Enter the Bearer token.'); return; }

    setLoading(true);
    try {
      const fd = new FormData();
      documents.forEach((f) => fd.append('document', f));
      fd.append('hashAlgorithm', hashAlgorithm);
      if (reason.trim()) fd.append('reason', reason.trim());
      if (location.trim()) fd.append('location', location.trim());
      if (contact.trim()) fd.append('contact', contact.trim());

      let url;
      if (mode === 'backend') {
        url = `${backendUrl.replace(/\/$/, '')}/api/pdf/renotarize/form`;
      } else {
        fd.append('authorization', authorization.startsWith('Bearer ') ? authorization : `Bearer ${authorization}`);
        fd.append('baseUrl', baseUrl);
        url = `${baseUrl.replace(/\/$/, '')}/solidsign/dsig/extending/pdf/add-doctimestamp`;
      }

      const res = await fetch(url, { method: 'POST', body: fd });
      const text = await res.text();
      let json;
      try { json = JSON.parse(text); } catch { json = null; }

      if (!res.ok) {
        setError(json?.message || text || `HTTP error ${res.status}`);
        return;
      }
      setResult(json);
    } catch (err) {
      setError(`Request failed (${mode === 'backend' ? backendUrl : baseUrl}): ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Renotarize PDF — add DocTimeStamp (React example)</h1>
      <p className="subtitle">
        Example front-end for <code>exemplo-integracao-pdf-renotarize</code>. Adds a fresh
        timestamp proving the document existed at this moment — no signing certificate needed.
        Visual stamp positioning is intentionally not covered here (see the PDF signing
        examples for that). By default talks to the local backend, which holds the API
        credentials server-side.
      </p>

      <form onSubmit={submit} className="form">
        <fieldset>
          <legend>1. Connection</legend>
          <div className="mode-toggle">
            <label><input type="radio" checked={mode === 'backend'} onChange={() => setMode('backend')} /> Via example backend (default)</label>
            <label><input type="radio" checked={mode === 'direct'} onChange={() => setMode('direct')} /> Direct to SolidSign API (optional)</label>
          </div>
          {mode === 'backend' ? (
            <label>Backend URL
              <input value={backendUrl} onChange={(e) => setBackendUrl(e.target.value)} placeholder={DEFAULT_BACKEND_URL} />
            </label>
          ) : (
            <>
              <label>SolidSign API base URL
                <input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} placeholder="https://www.solidsign.com.br" />
              </label>
              <label>Bearer token
                <input value={authorization} onChange={(e) => setAuthorization(e.target.value)} placeholder="eyJhbGciOi..." />
              </label>
            </>
          )}
        </fieldset>

        <fieldset>
          <legend>2. Document and timestamp parameters</legend>
          <label>PDF(s)
            <input type="file" accept=".pdf,application/pdf" multiple onChange={(e) => setDocuments(Array.from(e.target.files))} />
          </label>
          <label>Hash algorithm
            <select value={hashAlgorithm} onChange={(e) => setHashAlgorithm(e.target.value)}>
              <option value="SHA256">SHA-256</option>
              <option value="SHA512">SHA-512</option>
            </select>
          </label>
          <label>Reason (optional)
            <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Renotarization" />
          </label>
          <label>Location (optional)
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="São Paulo, BR" />
          </label>
          <label>Contact (optional)
            <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="admsolidsign@gmail.com" />
          </label>
        </fieldset>

        <button type="submit" disabled={loading}>{loading ? 'Renotarizing…' : 'RENOTARIZE'}</button>
      </form>

      {error && <div className="box error">{error}</div>}

      {result && (
        <div className="box success">
          <h3>Success!</h3>
          <p>{result.signatureCount} document(s) renotarized — identifier <code>{result.identifier}</code></p>
          <ul>
            {(result.documents || []).map((d, i) => {
              const href = d._links?.self?.href;
              return <li key={i}>Document {i + 1} — {href ? <a href={href} target="_blank" rel="noreferrer">download</a> : 'link unavailable'}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
