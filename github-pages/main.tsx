import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SabahSite, { type Lang, type PageKey } from "../app/SabahSite";
import "../app/globals.css";

const validPages = new Set<PageKey>(["home", "about", "companies", "news", "contact"]);
const aboutPages = new Set(["structure", "value-chain", "capabilities", "people", "global", "sustainability"]);

function routeFromLocation(): { lang: Lang; pageKey: PageKey } {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let pathname = decodeURIComponent(window.location.pathname);

  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }

  const segments = pathname.split("/").filter(Boolean);
  const lang: Lang = segments[0] === "en" ? "en" : "fa";
  const requestedPage = segments[1] ?? "home";
  const pageKey: PageKey = aboutPages.has(requestedPage)
    ? "about"
    : validPages.has(requestedPage as PageKey)
      ? (requestedPage as PageKey)
      : "home";

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  return { lang, pageKey };
}

const { lang, pageKey } = routeFromLocation();
const root = document.getElementById("root");

if (!root) throw new Error("Application root was not found.");

createRoot(root).render(
  <StrictMode>
    <SabahSite lang={lang} pageKey={pageKey} />
  </StrictMode>,
);
