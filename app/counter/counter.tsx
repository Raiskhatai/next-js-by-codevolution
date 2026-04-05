"use client";

import React, { useState } from "react";

// isme sirf counter ka kaam hey meta data ka nhi to hum isko export kar denge.

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
