export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    /*
     * Future API space
     *
     * All future dynamic functionality will live under /api/*
     * so the public website and backend logic remain cleanly separated.
     */

    if (url.pathname === "/api/status") {
      return Response.json({
        status: "online",
        project: "ƁƦƠҠЄƝ",
        version: "3.0.0"
      });
    }

    /*
     * Cloudflare Static Assets
     *
     * Every normal page request is served through Cloudflare's
     * asset system.
     */

    return env.ASSETS.fetch(request);
  }
};
