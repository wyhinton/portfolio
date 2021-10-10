import React, { FC, useEffect, useState } from "react";

import LocalImage from "../UI/LocalImage";
import NewProject from "../UI/NewProject";
import { useStoreState } from "../hooks";

const PlayProjectsSection = (): JSX.Element => {
  const playProjects = useStoreState((state) => state.appModel.playProjects);

  return (
    <div>
      {playProjects.map((projectData, i) => {
        <NewProject projectData={projectData} index={i}></NewProject>;
      })}
    </div>
  );
};

export default PlayProjectsSection;
