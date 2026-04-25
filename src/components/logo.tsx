import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
  title?: string;
};

function Logo({className, title}: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo_coffe.svg"
        alt="logo"
        width={150}
        height={100}
        priority
      />
      <h1>{title}</h1>
    </div>
  );
}

export default Logo;
