// We use the 'MiddlewareResponseHandler' type for strict safety
import type { MiddlewareResponseHandler } from "astro";

export const onRequest: MiddlewareResponseHandler = (context, next) => {
  const isMaintenance = import.meta.env.PUBLIC_MAINTENANCE_MODE === "true";

  const isHome = context.url.pathname === "/";
  // Allow the browser to load CSS and Images even in maintenance mode
  const isAsset =
    context.url.pathname.startsWith("/_astro") ||
    context.url.pathname.includes(".");

  if (isMaintenance && !isHome && !isAsset) {
    return context.redirect("/");
  }

  return next();
};
