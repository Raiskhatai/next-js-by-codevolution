import Link from "next/link";
import React from "react";

const ArticalId = async ({ params, searchParams }) => {
  const { articalId='1' } = await params;
  console.log(articalId);
  const { lang = "en" } = await searchParams;
  console.log(lang);
  return (
    <div>
      <div className="text-xl">
        <Link href={`artical/${articalId}?lang=en`}>English</Link>
        <Link href={`artical/${articalId}?lang=es`}>Spanish</Link>
        <Link href={`artical/${articalId}?lang=fr`}>France</Link>
      </div>
    </div>
  );
};

export default ArticalId;
