import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

function withRepositoryBase(href: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!href.startsWith("/") || href.startsWith(`${base}/`) || href === base) return href;
  return `${base}${href}`;
}

export default function Link({ href, prefetch, replace, scroll, ...props }: LinkProps) {
  return <a {...props} href={withRepositoryBase(href)} />;
}
