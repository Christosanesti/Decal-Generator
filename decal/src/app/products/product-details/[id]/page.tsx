import React from "react";

const page = async ({ params }) => {
  const id = (await params).id;
  return <div>{params.id}</div>;
};

export default page;
