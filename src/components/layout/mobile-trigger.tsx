// components/menu/mobile-trigger.tsx
"use client";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

export function MobileTrigger() {
  return (
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </SheetTrigger>
  );
}
