"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increament
      </button>
    </div>
  );
};

export default Counter;
