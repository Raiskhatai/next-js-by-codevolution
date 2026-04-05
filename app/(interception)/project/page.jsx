import Image from "next/image";
import React from "react";

const Images = [
  {
    href: "",
    alt: "john wick",
  },
  {
    href: "https://i.pinimg.com/736x/7a/41/1a/7a411acfedda5a56ff8d8cc71e57420b.jpg",
    alt: "ghost",
  },
  {
    href: "https://i.pinimg.com/1200x/5f/56/2f/5f562f692e12525f6dd5318ca6b6b8f8.jpg",
    alt: "john wick",
  },
  {
    href: "https://i.pinimg.com/736x/4e/c2/66/4ec2662183d3c787d5fdc76aa4a78f29.jpg",
    alt: "tonny stark",
  },
  {
    href: "https://i.pinimg.com/1200x/1e/d6/65/1ed66524ec1a9bbb1377b75e3d1c5d35.jpg",
    alt: "captain",
  },
];

const page = () => {
  return (
    <div>
      hi
      <div className="w-screen h-screen bg-amber-400">
        {Images.map((item,idx) => {
          return (
            <div key={idx} className="parent w-100 h-100 rounded-xl">
              <Image src={item.href} fill  />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
