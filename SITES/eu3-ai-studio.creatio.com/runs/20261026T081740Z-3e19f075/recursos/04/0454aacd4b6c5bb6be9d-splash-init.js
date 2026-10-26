// APD-356: path-specific handling of the pre-React sign-in splash overlay
// (#cp-splash, inlined in index.html). Loaded as an EXTERNAL same-origin script
// (`<script src="/splash-init.js">`) rather than inline, because the production
// CSP is `script-src 'self' blob:` (no 'unsafe-inline') — an inline <script>
// would be blocked. It runs before the deferred app module, while #cp-splash
// already exists in the DOM.
//
//  * /auth/callback — KEEP the overlay up the whole time the code is exchanged
//    and the browser navigates on to the app (no gap/flicker between the
//    callback and the /#/ landing). Tag it so the e2e selector still finds a
//    VISIBLE `oidc-callback-pending` splash; OidcCallbackPage only reveals the
//    overlay (removes it) on error.
//  * /approvals/confirm/* — a public page that renders its own content, so drop
//    the overlay immediately.
//  * /auth/device — APD-2296 CLI device-authorization page; a bypass page that
//    renders its own sign-in / authorize card, so drop the overlay immediately
//    too (otherwise the splash covers it and the page appears to "just load").
(function () {
  const el = document.getElementById("cp-splash");
  if (!el) {
    return;
  }
  const p = window.location.pathname;
  if (p === "/auth/callback") {
    el.setAttribute("data-testid", "oidc-callback-pending");
  } else if (p.indexOf("/approvals/confirm/") === 0 || p === "/auth/device") {
    el.remove();
  }
})();
