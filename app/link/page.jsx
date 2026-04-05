import Link from "next/link";
import React from "react";

const LinksComponent = () => {
  const tempParams = 100;
  return (
    <div className="flex justify-between w-2/3 h-full ">
      <Link className=" text-xl " href={"/"}>
        home
      </Link>
      <Link className=" text-xl " href={"/about"}>
        about
      </Link>
      <Link className=" text-xl " href={"/contact"}>
        contact
      </Link>
      <Link className=" text-xl " href={"/profile"}>
        profile
      </Link>
      <Link className=" text-xl" href={`products/${tempParams}`}>
        procuts id :{tempParams}
      </Link>{" "}
      // dynamic link page agar params se id mey dena or us dynamic id ke page
      par jana he to
    </div>
  );
};

export default LinksComponent;
