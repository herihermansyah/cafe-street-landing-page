import React from "react";
import {Input} from "./ui/input";
import {Search} from "lucide-react";

function SearchBar() {
  return (
    <div className="relative">
      <Input
        placeholder="Search..."
        className="pl-10 bg-white w-55.5 h-10 rounded-[35px]"
      />
      <Search size={24} className="absolute top-1/2 -translate-y-1/2 left-3"/>
    </div>
  );
}

export default SearchBar;
