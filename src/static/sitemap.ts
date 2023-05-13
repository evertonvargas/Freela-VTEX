interface SitemapProps {
  title: string;
  href: string;
}

export const sitemap: SitemapProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Serviços",
    href: "/#services",
  },
  {
    title: "Contatos",
    href: "/#contact",
  },
];