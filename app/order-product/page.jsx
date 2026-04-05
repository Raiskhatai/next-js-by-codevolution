"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// this is  navigation button its work with useRouter().
// we use useRouter() over <Link></Link> because we use logic in useRouter() before direct to other page.
// useRouter() is only use with client component "use client"

const OraderProduct = () => {
  console.log("placing your order");
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    // <Link href={"/"} >home</Link> this dosent work
    router.push("/");
  };
  return (
    <div>
      <h1>Order product</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};

export default OraderProduct;
