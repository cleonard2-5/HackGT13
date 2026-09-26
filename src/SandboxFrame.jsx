// Renders untrusted player HTML/CSS in an isolated iframe. Never render
// player-submitted markup directly in the main DOM — always go through this.
//
// No sandbox flags are enabled (sandbox="" — most restrictive form). This is
// a CSS/HTML playground, not a JS one: submissions never need script
// execution, form submission, popups, or top-level navigation, so none of
// those permissions are granted. Do NOT add "allow-scripts" without also
// reconsidering "allow-same-origin" — that combination together lets a
// sandboxed frame script its way back out to the parent origin.
export default function SandboxFrame({ html = '', css = '', title = 'submission preview', className = '' }) {
  const srcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${css}</style>
  </head>
  <body>${html}</body>
</html>`

  return (
    <iframe
      title={title}
      srcDoc={srcDoc}
      sandbox=""
      className={className}
      style={{ border: '1px solid #cbd5e1', width: '100%', height: '100%' }}
    />
  )
}
