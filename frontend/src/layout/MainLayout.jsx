import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main className="min-h-[calc(100vh-120px)] max-w-6xl md:mx-auto pt-16 md:pt-32">
        {children}
      </main>
      {window.location.pathname !== "/" && <FooterComponent />}
    </>
  );
}
