import React, { useState } from "react";
import { Data } from "../data";
import { Progress } from "@chakra-ui/react";

function Statistics() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="items-center justify-between w-full flex flex-col">
      {/* filtering section */}
      <div className="items-start self-center justify-start lg:space-x-2  cursor-pointer w-full space-y-4 lg:space-y-0 lg:flex py-2 px-3">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            onClick={() => setActiveTab(i)}
            className={` ${
              activeTab === i
                ? "bg-black text-gray-100"
                : "bg-gray-100 text-black"
            }  self-center  py-2 px-8 rounded-md  text-lg`}
          >
            {i === 0 ? "Statements" : "Statistics"}
          </div>
        ))}
        <div className="items-center justify-end flex space-x-6  py-3 px-4 w-full">
          <input
            type="date"
            className="bg-gray-100 py-2 px-4 rounded-md cursor-pointer"
          />
          <div className="bg-gray-100 py-2 px-2 rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* items */}
      {activeTab === 0 ? (
        <div>no statements</div>
      ) : (
        <div className="h-[300px]  overflow-y-scroll scrollbar-hide w-full py-3 px-4">
          {Data.map((item) => (
            <div className="flex w-full items-center justify-between py-6 px-3">
              <p
                className={`${item.color} py-2 px-4 rounded-md mr-4 font-bold`}
              >
                {item.id + 1}
              </p>
              <h1 className="text-left items-start justify-start flex w-[35%]">
                {" "}
                {item.title}{" "}
              </h1>
              <Progress
                colorScheme="green"
                className="w-[25%] lg:inline hidden "
                size="sm"
                value={item.value}
              />
              <h1 className="w-[25%] items-end justify-end flex font-medium text-black text-xl px-6 ">
                {item.amount} $
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Statistics;
