import "../css/project.css";
import "../css/collapsible.css";

import React, { useState } from "react";

import Collapsible from "react-collapsible";
import LinkIcon from "./LinkIcon";
import ProjectAsset from "./ProjectAsset";
import ProjectData from "../classes/ProjectData";
import ScrollHorizontal from "react-scroll-horizontal";
import classNames from "classnames";

const NewProject = ({
  projectData,
  index,
}: {
  projectData: ProjectData;
  index: number;
}): JSX.Element => {
  const { title, description, date, tags, assets, link } = projectData;
  const [isOpen, setIsOpen] = useState(false);

  const contentWrapperClass = classNames("project-container", {
    hidden: !isOpen,
    "project-container-display": isOpen,
  });

  return (
    // <ScrollHorizontal>
    <div
      // className={"flex-box"}
      style={{
        // webkitAnimation: `slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        willChange: "transform",
        // width: "100%",
        animation: `slide-in-top ${
          index * 0.2
        }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      }}
    >
      <Collapsible
        transitionTime={200}
        trigger={<ProjectTitle title={title} link={link} />}
        // trigger={title}
        onOpen={() => {
          console.log("setting on open");
          setIsOpen(true);
        }}
        onClose={() => {
          console.log("setting on close");
          setIsOpen(false);
        }}
      >
        <div className={contentWrapperClass}>
          <p>{description}</p>
          <ScrollHorizontal>
            <div className={"assets-array-container"}>
              {assets.map((asset, i) => {
                return (
                  <ProjectAsset
                    key={i}
                    index={i}
                    projectAsset={asset}
                    projectOpen={isOpen}
                  />
                );
              })}
            </div>
          </ScrollHorizontal>
        </div>
      </Collapsible>
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
    <div className={"flex-box"}>
      {title}
      {link !== "NA" ? <LinkIcon href={link}></LinkIcon> : <></>}
    </div>
  );
};
