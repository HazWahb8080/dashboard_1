import React from "react";

function Transfer() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-2 py-2">
      <h1 className="text-md w-full py-6">
        <b className="text-4xl">Transfer</b> to Visa or MasterCard
      </h1>
      <div className="grid grid-cols-3 gap-4 w-full ">
        <div className="col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3 ">
          <h1 className="border-r self-center border-black w-[25%]"> From </h1>
          <h1 className="w-[50%] self-center"> MasterCard ... 4060 </h1>
          <h1 className="font-bold text-2xl w-[25%] items-end justify-end flex">
            60,450$
          </h1>
        </div>
        <div className="col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3 ">
          <h1 className="border-r self-center border-black w-[25%]"> To </h1>
          <h1 className="w-[50%] self-center">521 4690 5836 4596</h1>
          <div className="w-[25%] items-end justify-end flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
        </div>

        <div className="col-span-3 space-x-4 flex items-center justify-between w-full py-3 px-3 ">
          <div className="w-[40%] flex space-x-4  border-b border-black py-4">
            <h1 className="border-r self-center border-black w-full">Amount</h1>
            <input className="w-full input text-xl font-bold " type="number" />
          </div>
          <div className="w-[40%] flex  space-x-4  border-b border-black py-4">
            <h1 className="border-r self-center border-black w-full"> CVV </h1>
            <input className="w-full input " type="number" />
          </div>
          <div className="w-[10%] smooth btn py-3 px-2 items-center justify-center flex">
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
