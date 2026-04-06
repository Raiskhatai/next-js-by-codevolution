import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-15 bg-blue-700 shadow-lg shadow-gray-400 p-5 font-bold capitalize ">
      pie chart <Link href={"/parallelroutes"}>heatmap</Link>
    </div>
  );
};

export default page;
