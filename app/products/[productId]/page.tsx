import React from "react";

type proto = {
  params: Promise<{ productId: string }>;
};

export default async function ProductId({ params }: proto) {
  const data = (await params).productId;
  console.log(data);
  return (
    <div className="">
      <h1>this is productId page product is {data}</h1>
    </div>
  );
}
