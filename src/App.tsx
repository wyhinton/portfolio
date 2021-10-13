import "./css/App.css";
import "./css/global.css";
import "react-tabs/style/react-tabs.css";

import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useStoreActions, useStoreState, useToggle } from "./hooks";

import AboutSection from "./Sections/AboutSection";
import Header from "./UI/Header";
import PlayProjectsSection from "./Sections/PlayProjectsSection";
import ProjectData from "./classes/ProjectData";
import WorkProjectsSection from "./Sections/WorkProjectsSection";

const App = () => {
  const fetchCardDataGoogleSheetThunk = useStoreActions(
    (actions) => actions.appModel.fetchAppGoogleSheet
  );

  const workProjectsState = useStoreState(
    (state) => state.appModel.workProjects
  );
  const playProjectsState = useStoreState(
    (state) => state.appModel.playProjects
  );

  useEffect(() => {
    fetchCardDataGoogleSheetThunk();
  }, [fetchCardDataGoogleSheetThunk]);

  useEffect(() => {
    // console.log(dep);
    setViewableProject(workProjectsState);
  }, [workProjectsState]);

  const [activeProject, setActiveProject] = useState<ProjectData | undefined>(
    undefined
  );

  const [viewableProject, setViewableProject] = useState<ProjectData[]>([]);

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (activeProject) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [activeProject]);

  return (
    <div className="app">
      <Tabs
        onSelect={(index) => {
          console.log(index);
          if (index == 0) {
            setViewableProject(workProjectsState);
          }
          if (index == 1) {
            setViewableProject(playProjectsState);
          }
        }}
      >
        <div className={"body-container"}>
          {/* <Grid container spacing={0}> */}
          <div className={"nav-section-container"}>
            <Header
              project={activeProject}
              onClosePress={() => setActiveProject(undefined)}
            >
              <TabList>
                <Tab className={"header-tab"}>Work</Tab>
                <Tab className={"header-tab"}>Play</Tab>
                <Tab className={"header-tab"}>About</Tab>
                <Tab className={"header-tab"}>Contact</Tab>
              </TabList>
            </Header>
          </div>
          <hr />
          <div className={"content-section-container"}>
            <TabPanel>
              <WorkProjectsSection
                projects={viewableProject}
                onProjectClick={(project) => {
                  if (project.title === activeProject?.title) {
                    setActiveProject(undefined);
                  } else {
                    setActiveProject(project);
                  }
                }}
                displayProject={activeProject}
              />
            </TabPanel>
            <TabPanel>
              <WorkProjectsSection
                projects={viewableProject}
                onProjectClick={(project) => {
                  if (project.title === activeProject?.title) {
                    setActiveProject(undefined);
                  } else {
                    setActiveProject(project);
                  }
                }}
                displayProject={activeProject}
              />
            </TabPanel>
            <TabPanel>
              <AboutSection />
            </TabPanel>
            <TabPanel>
              <img
                className={"email-image"}
                style={{ filter: "invert(100%)" }}
                src={`${process.env.PUBLIC_URL}/e.png`}
              />
            </TabPanel>
          </div>
          {/* </Grid> */}
        </div>
      </Tabs>
    </div>
  );
};

export default App;
