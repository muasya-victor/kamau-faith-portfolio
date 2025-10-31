// components/menu/menu-data.ts
export interface MenuItem {
  label: string;
  href?: string;
  icon?: string; // Change to string instead of React component
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Work",
    icon: "Box",
    children: [
      {
        label: "All Projects",
        icon: "Box",
        children: [
          {
            label: "Link The People",
            href: "/projects/link-the-people",
            icon: "Umbrella",
          },
          {
            label: "Fukazee",
            href: "/projects/fukazee",
            icon: "Umbrella",
          },
          {
            label: "MediaPal Dashboard",
            href: "/projects/mediapal-dashboard",
            icon: "Umbrella",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    icon: "BadgeQuestionMark",
    children: [
      {
        label: "Faith (Myself)",
        href: "/about/faith",
        icon: "BadgeQuestionMark",
      },
      {
        label: "My Design Studio",
        href: "/about/agency",
        icon: "BadgeQuestionMark",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "Phone",
  },
];
