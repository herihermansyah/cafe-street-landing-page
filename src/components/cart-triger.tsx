import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {ShoppingCart} from "lucide-react";

function CartTriger() {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <ShoppingCart size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart </SheetTitle>
        </SheetHeader>
        {/* your content */}
      </SheetContent>
    </Sheet>
  );
}

export default CartTriger;
