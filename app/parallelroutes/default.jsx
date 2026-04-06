import React from "react";

// parallel routes matlab ek route mey multiple routes(pages) chalana har ek route diffrent hoga error bhi independent page par aayegi or loading bhi .

// unmatch routing ka matlab hey : agar hum kisi parallel routes ke andar ho usme hum kisi or child route mey jaye feer page refresh kare to page not found aayega iska solution default.jsx file banana jisko hum page ki copy karke name change kar sakte hey. iska example hey  .

const Default = ({ barchart, linechart, heatmap }) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-600 px-15 p-15 gap-5  ">
      <h1>charts</h1>
      <div className="w-full flex gap-5">
        {barchart}
        {linechart}
      </div>
      {heatmap}
    </div>
  );
};

export default Default;
