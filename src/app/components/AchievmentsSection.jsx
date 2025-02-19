"use client";
import React from "react";

const achievementsList = [
  {
    id: 0,
    metric: "Projetos",
    value: "3+",
  },
  {
    id: 1,
    metric: "Clientes",
    value: "~10",
  },
  {
    id: 2,
    metric: "Anos",
    value: "1",
  },
];

const AchievmentsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md md:py-8 md:px-16 flex sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievmentsSection;
