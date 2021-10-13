import "../css/project.css";
import "../css/collapsible.css";
import "../css/App.css";

import React, { useState } from "react";

import Caption from "./Caption";
import Collapsible from "react-collapsible";
import LinkIcon from "./LinkIcon";
import ProjectAsset from "./ProjectAsset";
import ProjectData from "../classes/ProjectData";
import classNames from "classnames";

const NewProject = ({
  projectData,
  index,
  onClick,
  show,
}: {
  projectData: ProjectData;
  index: number;
  onClick: (projectData: ProjectData) => void;
  show: boolean;
}): JSX.Element => {
  const { title, description, date, tags, assets, link } = projectData;
  const [isOpen, setIsOpen] = useState(false);

  const contentWrapperClass = classNames("project-container", {
    hidden: !isOpen,
    "project-container-display": isOpen,
  });

  return (
    <div
      style={
        show
          ? {
              willChange: "transform",
              animation: `slide-in-top ${
                index * 0.2
              }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            }
          : {}
      }
      className={show ? "nav-item-basic" : "nav-item-hide"}
      onClick={(e) => {
        console.log("doing on clock");
        onClick(projectData);
      }}
    >
      <ProjectTitle title={title} link={link} />
    </div>
  );
};

export default React.memo(NewProject);

const ProjectTitle = ({
  title,
  link,
}: {
  title: string;
  link: string;
}): JSX.Element => {
  return (
    <div className={"project-title"}>
      {title}
      {/* {link !== "NA" ? <LinkIcon href={link}></LinkIcon> : <></>} */}
    </div>
  );
};
