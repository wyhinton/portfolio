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

const WorkProjectsSection = (): JSX.Element => {
  const workProjectsState = useStoreState(
    (state) => state.appModel.workProjects
  );
  const [activeProject, setActiveProject] = useState(workProjectsState[0]);
  // const [lastProject, setLastProject] = useState<ProjectData | undefined>(
  //   undefined
  // );
  const [projectA, setProjectA] = useState(workProjectsState[0]);
  const [projectB, setProjectB] = useState(workProjectsState[2]);

  const [aActive, toggleA] = useToggle(true);

  const [scrollPosition, setScrollPosition] = useState(50);
  // const { assets } = activeProject;
  useEffect(() => {
    // console.log(projectB);
    // () => {
    // };
    toggleA();
    console.log(aActive);
    if (aActive) {
      setProjectA(activeProject);
    } else {
      setProjectB(activeProject);
    }
  }, [activeProject]);

  return (
    <div className={"project-section-grid-container"}>
      <div className={"nav-section"}>
        {workProjectsState.map((projectData, i) => {
          return (
            <NewProject
              key={i}
              onClick={(projectTitle) => {
                if (projectTitle !== activeProject?.title) {
                  setActiveProject(
                    workProjectsState.filter(
                      (project) => project.title === projectTitle
                    )[0]
                  );
                }
              }}
              projectData={projectData}
              index={i}
            ></NewProject>
          );
        })}
      </div>
      <div className={"gallery-section"}>
        <div className="viewer-container">
          {projectA?.assets ? (
            <ProjectViewer
              assets={projectA.assets}
              active={!aActive}
              title={"A"}
            />
          ) : (
            <></>
          )}
          {projectB?.assets ? (
            <ProjectViewer
              assets={projectB.assets}
              active={aActive}
              title={"B"}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkProjectsSection;

const ProjectViewer = ({
  assets,
  active,
  title,
}: {
  assets: ProjectAssetData[];
  active: boolean;
  title?: string;
}): JSX.Element => {
  const containerClass = classNames("scroll-container", {
    "scroll-container-hidden": !active,
    "scroll-container-display": active,
  });
  // const [isActive, setisActive] = useState(initialState)
  return (
    <div className={containerClass}>
      {title ?? ""}
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
