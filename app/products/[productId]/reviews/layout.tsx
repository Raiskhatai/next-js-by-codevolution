import React from "react";

const LayoutOfReview = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>featured products</h1>
      {children}
    </div>
  );
};

export default LayoutOfReview;
