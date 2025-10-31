// components/menu/menu.tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MobileTrigger } from "./mobile-trigger";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { menuItems, MenuItem } from "./menu-data";
import Link from "next/link";
import { Box, Umbrella, Redo2, Phone, BadgeQuestionMark } from "lucide-react";
import Image from "next/image";

// Icon mapping
const iconMap = {
  Box,
  Umbrella,
  Redo2,
  Phone,
  BadgeQuestionMark,
};

// Helper component for nested desktop menu items
const DesktopMenuContent = ({ items }: { items: MenuItem[] }) => {
  return (
    <>
      {items.map((item, index) => {
        const Icon = item.icon
          ? iconMap[item.icon as keyof typeof iconMap]
          : undefined;

        if (item.children) {
          return (
            <MenubarSub key={index}>
              <MenubarSubTrigger className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4" />}
                {item.label}
              </MenubarSubTrigger>
              <MenubarSubContent>
                <DesktopMenuContent items={item.children} />
              </MenubarSubContent>
            </MenubarSub>
          );
        }

        return (
          <MenubarItem key={index} asChild>
            <Link href={item.href || "#"} className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4" />}
              {item.label}
            </Link>
          </MenubarItem>
        );
      })}
    </>
  );
};

// Recursive component for mobile menu
const MobileMenuItem = ({ item }: { item: MenuItem }) => {
  const Icon = item.icon
    ? iconMap[item.icon as keyof typeof iconMap]
    : undefined;

  if (item.children) {
    return (
      <div className="space-y-2">
        <h3 className="font-semibold flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {item.label}
        </h3>
        <div className="space-y-1 ml-4">
          {item.children.map((child, index) => (
            <MobileMenuItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Button variant="ghost" className="w-full justify-start gap-2" asChild>
      <Link href={item.href || "#"}>
        {Icon && <Icon className="h-4 w-4" />}
        {item.label}
      </Link>
    </Button>
  );
};

export function Menu() {
  const MobileMenuContent = () => (
    <div className="flex flex-col space-y-4 p-4">
      {/* Logo in mobile menu */}
      <div className="flex justify-center mb-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      <div className="border-t pt-4">
        {menuItems.map((item, index) => (
          <MobileMenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Menu - Server Component */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between w-full px-4 py-2 border-b border-gray-200">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Menu items on the right */}
          <Menubar className="w-auto shadow-none border-none">
            {menuItems.map((item, index) => {
              const Icon = item.icon
                ? iconMap[item.icon as keyof typeof iconMap]
                : undefined;

              // If item has children, show dropdown menu
              if (item.children && item.children.length > 0) {
                return (
                  <MenubarMenu key={index}>
                    <MenubarTrigger className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.label}
                    </MenubarTrigger>
                    <MenubarContent>
                      <DesktopMenuContent items={item.children} />
                    </MenubarContent>
                  </MenubarMenu>
                );
              }

              // If item has no children, make it a direct link with empty MenubarContent
              return (
                <MenubarMenu key={index}>
                  <MenubarTrigger className="flex items-center gap-2" asChild>
                    <Link href={item.href || "#"}>
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.label}
                    </Link>
                  </MenubarTrigger>
                  {/* Empty MenubarContent to satisfy the component structure */}
                  <MenubarContent />
                </MenubarMenu>
              );
            })}
          </Menubar>
        </div>
      </div>

      {/* Mobile Menu - Only trigger is client component */}
      <div className="md:hidden">
        <div className="flex items-center justify-between w-full px-4 py-4">
          {/* Logo on mobile header */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Mobile menu trigger */}
          <Sheet>
            <MobileTrigger />
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <VisuallyHidden>
                <h2>Navigation Menu</h2>
                <p>Main navigation menu</p>
              </VisuallyHidden>
              <MobileMenuContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
