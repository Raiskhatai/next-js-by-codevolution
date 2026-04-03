import React from "react";

export const generateMetaData={
  
}

const Page = async ({ params }) => {
  let paramsValue = await params;
  const productId = paramsValue.productId;
  console.log(productId);
  return <div>{productId}</div>;
};

export default Page;
