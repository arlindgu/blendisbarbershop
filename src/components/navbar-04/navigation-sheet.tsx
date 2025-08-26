import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <Logo />
          </SheetDescription>
        </SheetHeader>
        <SheetTrigger asChild>
          <NavMenu orientation="vertical" className="px-4" />
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
};
