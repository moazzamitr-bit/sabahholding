import SabahSite, { type Lang, type PageKey } from "../../SabahSite";
import { redirect } from "next/navigation";

const validPages = new Set<PageKey>([
  "home", "about", "companies", "news", "contact",
]);
const consolidatedPages = new Set(["structure", "value-chain", "capabilities", "people", "global", "sustainability"]);

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const resolved = await params;
  const lang: Lang = resolved.lang === "en" ? "en" : "fa";
  const candidate = (resolved.slug?.[0] || "home") as PageKey;
  if (consolidatedPages.has(candidate)) redirect(`/${lang}/about`);
  const pageKey = validPages.has(candidate) ? candidate : "home";

  return <SabahSite lang={lang} pageKey={pageKey} />;
}
