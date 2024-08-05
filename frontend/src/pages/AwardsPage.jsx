import React from "react";
import MainLayout from "../layout/MainLayout";
import RecentAward from "../components/RecentAward";
import AwardsComponent from "../components/AwardsComponent";
import Strings from "../shared/Strings";

export default function AwardsPage() {
  const string = Strings;

  return (
    <MainLayout>
      <div className="w-full min-h-screen mb-4 md:mb-16">
        <div
          className="w-full h-[170px] md:h-[500px] flex flex-col items-center justify-center gap-4 bg-slate-600"
          style={{
            backgroundImage: "url(/awards-images.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: `100%`,
            backgroundPosition: "top",
          }}
        >
          <div className="flex flex-col items-center justify-center text-white max-h-80">
            <h1 className="text-center text-3xl md:text-6xl font-extrabold leading-6 drop-shadow-lg">
              AWARDS & RECOGNITION
            </h1>
            <p className="text-center md:font-bold md:px-40 leading-tight drop-shadow-lg bg-black bg-opacity-10 md:py-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              unde fuga distinctio beatae ut dolor repellendus alias obcaecati
              quam neque aliquam eum esse ipsum laboriosam, maiores dignissimos.
            </p>
          </div>
        </div>
        <div className="w-full mt-0 md:mt-[-50px] md:p-8 mb-10">
          <div className="w-full min-h-60 rounded-sm md:rounded-2xl bg-[#f1f1f1] p-2 text-sm md:text-lg text-justify dark:text-slate-950">
            <RecentAward award={string} />
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-wrap justify-center gap-10 px-2">
          <AwardsComponent award={string} />
          <AwardsComponent award={string} />
          <AwardsComponent award={string} />
          <AwardsComponent award={string} />
        </div>
      </div>
    </MainLayout>
  );
}
