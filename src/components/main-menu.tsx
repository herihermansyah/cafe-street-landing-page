import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

const mainMenuData = [
  {id: 1, name: "about us", url: "/"},
  {id: 2, name: "our product", url: "/"},
  {id: 3, name: "delivery", url: "/"},
];

function MainMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-col gap-4 lg:flex-row lg:gap-8">
        {mainMenuData.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              asChild
              className="text-[18px] whitespace-nowrap bg-transparent hover:bg-transparent capitalize hover:text-primary focus:text-primary focus:bg-transparent"
            >
              <Link href={item.url}>{item.name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainMenu;
