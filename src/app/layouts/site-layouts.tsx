import Header from "@/components/layouts/header";
import React from "react";

function SiteLayouts({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed left-0 right-0 top-0 z-50">
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer></footer>
    </div>
  );
}

export default SiteLayouts;
