import React from "react";
import { Breadcrumb } from "flowbite-react";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <Breadcrumb aria-label="breadcrumb" className="font-bold uppercase">
      {crumbs.map((crumb) => (
        <Breadcrumb.Item key={crumb.title} href={crumb.href}>
          {crumb.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
