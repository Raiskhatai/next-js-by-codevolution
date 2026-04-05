import React from "react";
const paramsPage = async ({ params, searchParams }) => {
  const { articalId = "1" } = await params;
  console.log(articalId);
  const { lang = "en" } = await searchParams;
  console.log(lang);
  return (
    <div>
      <div className="text-xl mb-15">
        <h1>News artical {articalId}</h1>
        <h1>Reading in language {lang}</h1>
      </div>
    </div>
  );
};

export default paramsPage;
