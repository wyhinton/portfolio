import React, { FC, useEffect, useState } from "react";

import LocalImage from "../UI/LocalImage";
import NewProject from "../UI/NewProject";
import { useStoreState } from "../hooks";

const PlayProjectsSection = (): JSX.Element => {
  const workProjectsState = useStoreState(
    (state) => state.appModel.playProjects
  );
  return (
    <div>
      {/* {workProjectsState.map((projectData, i) => {
        return <NewProject projectData={projectData} index={i}></NewProject>;
      })} */}
    </div>
  );
};

export default PlayProjectsSection;
