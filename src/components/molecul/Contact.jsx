import React from "react";
import ava from "../../assets/ava.png";

const Contact = () => {
  return (
    <div className=" py-4 mx-[22px] bg-[#FCFBFF] rounded-2xl shadow px-2 text-[#27104E]">
      <div className="col-span-4 font-semibold px-2 flex justify-between items-center">
        <h1>Contact Team</h1>
        <p className="text-xs underline cursor-pointer">See All</p>
      </div>
      <div className="flex mt-2 bg-[#FCFBFF] rounded-2xl shadow p-2 justify-between items-center">
        <div className="flex gap-3">
          <img src={ava} alt="ava" className=" object-fill" />
          <div className=" text-xs whitespace-nowrap">
            <h1 className="font-bold">Wandy</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="rounded-2xl px-3 py-1 bg-[#ddacf566] text-[#9854CB] text-sm">
          Chat
        </div>
      </div>
      <div className="flex  gap-6 mt-2 bg-[#FCFBFF] rounded-2xl shadow p-2 justify-between items-center">
        <div className="flex gap-3">
          <img src={ava} alt="ava" className=" object-fill" />
          <div className=" text-xs flex flex-col whitespace-nowrap">
            <h1 className="font-bold">Asep</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="rounded-2xl px-3 py-1 bg-[#ddacf566] text-[#9854CB] text-sm">
          Chat
        </div>
      </div>
      <div className="flex  gap-6 mt-2 bg-[#FCFBFF] rounded-2xl shadow p-2 justify-between items-center">
        <div className="flex gap-3">
          <img src={ava} alt="ava" className=" object-fill" />
          <div className=" text-xs flex flex-col whitespace-nowrap">
            <h1 className="font-bold">Asep</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="rounded-2xl px-3 py-1 bg-[#ddacf566] text-[#9854CB] text-sm">
          Chat
        </div>
      </div>
    </div>
  );
};

export default Contact;
