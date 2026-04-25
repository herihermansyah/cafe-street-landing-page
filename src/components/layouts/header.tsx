"use client";
import React from "react";
import Logo from "../logo";
import MainMenu from "../main-menu";
import SearchBar from "../search-bar";
import CartTriger from "../cart-triger";
import ToggleMenu from "../toggle-menu";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="py-5">
      <div className="container mx-auto">
        {/* desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <Logo />
          <MainMenu />
          <div className="flex items-center gap-6">
            <SearchBar />
            <CartTriger />
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden relative flex items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-5">
            <CartTriger />
            <ToggleMenu onClick={() => setIsOpen(!isOpen)} clicked={isOpen} />
          </div>
          <div
            className={`absolute top-10 flex flex-col items-center gap-4 w-full left-1/2 -translate-x-1/2
            ${isOpen ? "translate-y-3" : "-translate-y-90"} transition-all duration-500 ease-in-out
            `}
          >
            <MainMenu />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
