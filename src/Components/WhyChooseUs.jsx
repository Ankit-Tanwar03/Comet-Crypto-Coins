import React from "react";
import { colOneData } from "../Content/whyChooseUs.js";
import { colTwoData } from "../Content/whyChooseUs.js";
import BGImage from "../assets/WhyChooseUs/BackgroundImage.png";

function WhyChooseUs() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-black to-slate-800 pt-24">
        <h1 className="text-white text-center text-6xl">
          WHY <span className="text-lime-400">CHOOSE US</span>
        </h1>
        <div className="flex items-center justify-around pt-20">
          <div className="flex flex-col items-center justify-start ">
            {colOneData.cards.map((card, index) => (
              <div
                key={index}
                className="w-4/5 border-t shadow-[0px_30px_40px_-40px_rgba(0,0,0,0.3)]  shadow-cyan-400 rounded-lg px-6 py-6 my-2 text-wrap"
              >
                <h1 className="text-2xl text-blue-500 font-semibold text-wrap pb-2">
                  {card.title}
                </h1>
                <p className="text-white text-left">{card.description}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src={BGImage}
              alt="BGImage"
              className="w-96 animate-[wiggle_3s_ease-in-out_infinite] "
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            {colTwoData.cards.map((card, index) => (
              <div
                key={index}
                className="w-4/5 border-t shadow-[0px_30px_40px_-40px_rgba(0,0,0,0.3)]  shadow-cyan-400 rounded-lg px-4 py-6 my-2 text-wrap"
              >
                <h1 className="text-2xl text-blue-500 font-semibold text-wrap pb-2">
                  {card.title}
                </h1>
                <p className="text-white text-left">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
