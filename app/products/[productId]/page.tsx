import { Metadata } from "next";
import React from "react";

type props = {
  params: Promise<{ productId: string }>;
};

export const generateMetaData = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};

export default async function ProductId({ params }: props) {
  const data = (await params).productId;
  console.log(data);
  return (
    <div className="">
      <h1>this is productId page product is {data}</h1>
    </div>
  );
}
