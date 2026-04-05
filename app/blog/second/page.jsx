import React from "react";

export const metadata = {
  title: "this is blog's second page",
};


const Second = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentionally delay");
    }, 2000);
  });
  return (
    <div>
      this is second page of blog this is make for checking loading is working.
    </div>
  );
};

export default Second;
