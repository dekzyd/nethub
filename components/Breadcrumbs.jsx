import React from "react";
import { Breadcrumb } from "flowbite-react";

const Breadcrumbs = () => {
  return (
    <Breadcrumb aria-label="breadcrumb" className="font-bold uppercase">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">About</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
