import Counter from "./counter";

// use client ke sath meta data use nhi kar sakte hey .
// agar use karna hey to isko dusre folder mey import kar lo.
// check counter file in coutner folder

export const metadata = {
  title: "this is metadata",
  description:
    "this is simple static metadata you cant use use effect or client component even with this",
};

const Count = async () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default Count;
