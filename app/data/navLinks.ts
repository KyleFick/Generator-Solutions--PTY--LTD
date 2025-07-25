// components/nav/NavLinks.ts

export interface NavLink {
  name: string;
  href: string;
}

export const NavLinks: NavLink[] = [
  {
    name: "Features",
    href: "/pages/features",
  },
  {
    name: "Services",
    href: "/pages/services",
  },
  {
    name: "Contact",
    href: "/pages/contactus",
  },
  {
    name: "About",
    href: "/pages/aboutus",
  },
  {
    name: "Gallery",
    href: "/pages/gallery",
  },
  {
    name: "Get a Quote",
    href: "/pages/quote",
  },
];
