"use client"
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import BookingButton from "../ui/bookingbutton";

const Navbar04Page = () => {
  return (
    <nav className="h-16 fixed top-6 inset-x-4 bg-background border rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <BookingButton />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
