import React from "react";

export default function AwardsComponent({ award }) {
  //   description,
  //   award_title,
  //   award_date,
  //   awarding_institution,
  //   award_image

  return (
    <div className="w-full md:w-80 h-[400px] border border-slate-400 rounded-md m-1">
      <div
        className="w-full h-40"
        style={{
          backgroundImage: `url(/placeholder.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          overflow: "clip",
        }}
      ></div>
      <div className="w-full border-b-8 border-red-600"></div>
      <div className="w-full p-2 flex flex-col gap-3">
        <h1 className="text-xl font-bold">{award.award_title}</h1>
        <p className="text-md line-clamp-6">{award.description}</p>
      </div>
    </div>
  );
}
