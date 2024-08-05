import React from "react";
import MainLayout from "../layout/MainLayout";
import aboutOmodara from "/omodara_about.png";

export default function About() {
  return (
    <MainLayout>
      <div
        className="w-full p-2 min-h-[400px] "
        // style={{
        //   backgroundImage: `url(${aboutOmodara})`,
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        About Page
      </div>
    </MainLayout>
  );
}
