import "../css/projectSection.css";

import React, { FC, useEffect, useState } from "react";
import { useStoreState, useToggle } from "../hooks";

import LocalImage from "../UI/LocalImage";
import NewProject from "../UI/NewProject";
import ProjectAsset from "../UI/ProjectAsset";
import { ProjectAssetData } from "../interfaces/ProjectAssetData";
import ProjectData from "../classes/ProjectData";
import ScrollHorizontal from "react-scroll-horizontal";
import classNames from "classnames";

const WorkProjectsSection = ({
  projects,
  onProjectClick,
  displayProject,
}: {
  projects: ProjectData[];
  onProjectClick: (project: ProjectData) => void;
  displayProject?: ProjectData;
}): JSX.Element => {
  // const workProjectsState = useStoreState(
  //   (state) => state.appModel.workProjects
  // );
  const workProjectsState = projects;
  const [activeProject, setActiveProject] = useState<ProjectData | undefined>(
    undefined
  );
  const [showNav, setShowNav] = useState(true);
  const [aActive, toggleA] = useToggle(true);
  const navElems = () => {
    return workProjectsState.map((projectData, i) => {
      return (
        <NewProject
          key={i}
          show={displayProject == undefined}
          onClick={(projectData) => {
            onProjectClick(projectData);
          }}
          projectData={projectData}
          index={i}
        ></NewProject>
      );
    });
  };

  return (
    <div className={"project-section-grid-container"}>
      <div className={"nav-section"}>
        <div className={"nav-wrapper"}>{navElems()}</div>
        {displayProject ? (
          <ProjectViewer
            projectData={displayProject}
            active={true}
            title={"A"}
          />
        ) : (
          <></>
          // navElems()
        )}
      </div>
      {/* <div className={"gallery-section"}>
        <div className="viewer-container">
          {activeProject?.assets ? (
            <ProjectViewer
              projectData={activeProject}
              active={!aActive}
              title={"A"}
            />
          ) : (
            <></>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default WorkProjectsSection;

const ProjectViewer = ({
  // assets,
  projectData,
  active,
  title,
}: {
  projectData: ProjectData;
  active: boolean;
  title?: string;
}): JSX.Element => {
  const containerClass = classNames("scroll-container", {
    "scroll-container-hidden": !active,
    "scroll-container-display": active,
  });
  const { assets, description } = projectData;
  // const [isActive, setisActive] = useState(initialState)
  return (
    <div className={containerClass}>
      {/* {title ?? ""} */}
      <div className={"description-container"}>
        <h2>{description}</h2>
      </div>
      <ScrollHorizontal animValues={active ? 0 : -100}>
        <div className={"assets-array-container"}>
          {assets ? (
            assets.map((asset, i) => {
              return (
                <ProjectAsset
                  key={i}
                  index={i}
                  projectAsset={asset}
                  projectOpen={true}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </ScrollHorizontal>
    </div>
  );
};
