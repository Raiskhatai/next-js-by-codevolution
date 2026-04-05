import { resolve } from "path";
import React from "react";

// use effect ke sath metadata use nhi kar sakte hey wo static he kyu na ho.

// generateMetadata is key and function word it is used for d dynamic meta data .
export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  console.log(title);
  return {
    title: `product ${id}`,
    description: `hi this you are checking pratham web here you can find every new fashion clothes and acceriese`,
  };
};

const Page = async ({ params }) => {
  let paramsValue = await params;
  const productId = paramsValue.productId;
  return <div> Details about product {productId}</div>;
};

export default Page;
