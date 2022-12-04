import React from "react";
import ava from "../../assets/ava.png";
import plus from "../../assets/plus.png";

const CardProgres = ({date, title, subTitle, progress, dayLeft}) => {
  return (
    <div className="bg-[#FCFBFF] rounded-xl mx-[22px] my-[31px] shadow">
      <div className="flex justify-between m-3 text-[#D9D9D9] font-semibold">
        <p>{date}</p>
        <p>i</p>
      </div>
      <div className="mx-[31px] text-[#27104E]">
        <h1 className=" font-semibold text-[20px]">{title}</h1>
        <p className="text-[16px] py-2">{subTitle}</p>
        <div className="w-full bg-gray-200 h-3 rounded mb-2 mt-2">
          <div
            className="bg-[#9854CB] h-3 rounded"
            style={{ width: `${progress}` }}
          ></div>
        </div>
        <div className="flex justify-between mb-4">
          <p>Progress</p>
          <p>{progress}</p>
        </div>
      </div>
      <div className="border border-b border-gray-400 mx-6"></div>
      <div className="mx-6 flex justify-between my-3">
        <div className="flex gap-4">
          <div className="flex">
            <img src={ava} alt="ava" />
            <img src={ava} alt="ava" className=" -ml-3" />
          </div>
          <img src={plus} alt="plus" />
        </div>
        <div className="rounded-2xl px-2 items-center bg-[#ddacf566]">
            <p className="text-[#9854CB]">{dayLeft} days left</p>
        </div>
      </div>
    </div>
  );
};

export default CardProgres;
