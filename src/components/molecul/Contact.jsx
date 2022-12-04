import React from "react";
import ava from "../../assets/ava.png";

const Contact = () => {
  return (
    <div className=" py-4 mx-[22px] bg-[#FCFBFF] rounded-2xl shadow px-[35px] col-span-1gap-2  text-[#27104E]">
      <div className="col-span-4 font-semibold text-[20px] flex justify-between items-center">
        <h1>Contact Team</h1>
        <p className="text-xs underline cursor-pointer">See All</p>
      </div>
      <div className="flex  gap-6 mt-2 bg-[#FCFBFF] rounded-2xl shadow p-2 justify-between">
        <div className="flex gap-3">
          <img src={ava} alt="ava" className=" object-fill" />
          <div className=" text-xs flex flex-col whitespace-nowrap">
            <h1 className="font-bold">Wandy</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="rounded-2xl px-4 py-1 bg-[#ddacf566]">
          <p className="text-[#9854CB]">Chat</p>
        </div>
      </div>
      <div className="flex  gap-6 mt-2 bg-[#FCFBFF] rounded-2xl shadow p-2 justify-between">
        <div className="flex gap-3">
          <img src={ava} alt="ava" className=" object-fill" />
          <div className=" text-xs flex flex-col whitespace-nowrap">
            <h1 className="font-bold">Asep</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="rounded-2xl px-4 py-1 bg-[#ddacf566]">
          <p className="text-[#9854CB]">Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
