import {Menu, X} from "lucide-react";
import React from "react";

type Props = {
  onClick: React.MouseEventHandler;
  clicked: boolean;
};

function ToggleMenu({onClick, clicked}: Props) {
  return (
    <button onClick={onClick}>
      {clicked ? <X size={32} /> : <Menu size={32} />}
    </button>
  );
}

export default ToggleMenu;
