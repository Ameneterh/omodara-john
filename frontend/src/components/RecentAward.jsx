import React from "react";

export default function RecentAward({ award }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-1 md:p-4 justify-center">
      <div
        className="flex-1 w-full min-h-80 bg-slate-300 rounded-md border-4 border-white drop-shadow-lg flex justify-start items-end"
        style={{
          backgroundImage: "url(/awards-images.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `100%`,
          backgroundPosition: "center",
        }}
      >
        <span className="font-normal text-md px-4 py-1 m-1 bg-slate-800 rounded-md text-white">
          {award.award_date.toDateString()}
        </span>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="flex justify-between items-center text-lg font-bold">
          {award.awarding_institution}
        </h3>
        <h1 className="text-2xl font-bold">{award.award_title}</h1>
        <p>{award.description}</p>
      </div>
    </div>
  );
}
