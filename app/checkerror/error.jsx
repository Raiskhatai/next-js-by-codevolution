"use client";
import Error from "next/error";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

// error page must be client component.
const error = ({
  error,
  reset, // reset reload karne ke liye taki render ho page
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh(); // page ko referse karta hey
      reset(); // try again agar koi error aa gyi hoto.
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button
        className="cursor-pointer bg-gray-300 p-1 text-black hover:scale-105 mx-auto w-fit "
        onClick={() => reload()}
      >
        try again
      </button>
    </div>
  );
};

export default error;
