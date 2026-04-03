import React from "react";
import Counter from "./counter";

export const metadata = {
  title: "meta-data",
  description: "this is meta data page of our website meta ",
};

const page = ({params}) => {
  console.log(params)
  return (
    <div>
      <Counter />
    </div>
  );
};

export default page;
