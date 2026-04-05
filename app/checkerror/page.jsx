import React from "react";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}

const checkPage = () => {
  const ranNum = getRandomInt(2);
  if (ranNum === 1) {
    throw new Error("error aa gaya oye"); // we throw this message to error page when error come its show error.jsx page
  }
  return <div>error nhi hey wala page</div>;
};

export default checkPage;
