import "../css/project.css";
import "../css/collapsible.css";

import React, { FC, useEffect, useState } from "react";

import Collapsible from "react-collapsible";
import ScrollHorizontal from "react-scroll-horizontal";

interface ProjectProps {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}
const Project = ({
  title,
  children,
  description,
}: ProjectProps): JSX.Element => {
  return (
    // <ScrollHorizontal>
    <Collapsible trigger={title}>
      <div className={"project-container"}>
        {/* <h1>{title}</h1> */}
        <p>{description}</p>
        <div>{children}</div>
      </div>
    </Collapsible>
    // </ScrollHorizontal>
  );
};

export default Project;
