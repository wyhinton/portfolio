import "../css/header.css";

import React, { FC, useEffect, useState } from "react";

import LeftArrowIcon from "./LeftArrowIcon";
import ProjectData from "../classes/ProjectData";
import classNames from "classnames";

const Header = ({
  children,
  onClosePress,
  project,
}: {
  children: JSX.Element | JSX.Element[];
  onClosePress: () => void;
  project?: ProjectData;
}): JSX.Element => {
  7;
  const nameStyle = {
    fontSize: "3.5vw",
    width: "min-content",
  };

  const containerStyle = {
    display: "flex",
    fontSize: "3.5vw",
    fontWeight: "bold",
  } as React.CSSProperties;

  const containerClass = classNames("header-container", {
    "header-switch-hidden": project !== undefined,
    "header-switch-display": project == undefined,
  });
  return (
    <div className={"header-container"} style={containerStyle}>
      {project !== undefined ? (
        <ProjectHeader
          projectData={project}
          onClosePress={onClosePress}
          show={true}
        />
      ) : (
        <></>
      )}
      <div className={containerClass}>
        <MyName show={project === undefined} />
        {children}
      </div>
      {/* {project ? (
        <ProjectHeader projectData={project} onClosePress={onClosePress} />
      ) : (
        <div className={"header-container"}>
          <MyName />
          {children}
        </div>
      )} */}
    </div>
  );
};

export default Header;

const ProjectHeader = ({
  projectData,
  onClosePress,
  show,
}: {
  projectData: ProjectData;
  onClosePress: () => void;
  show: boolean;
}): JSX.Element => {
  const containerStyle = {
    display: "flex",
    fontSize: "3.5vw",
    fontWeight: "bold",
  } as React.CSSProperties;

  const containerClass = classNames("header-switch", {
    "header-switch-hidden": !show,
    "header-switch-display": show,
  });
  return (
    <div style={containerStyle} className={containerClass}>
      <div
        style={{ height: "auto", width: "1em" }}
        onMouseUp={(e) => {
          onClosePress();
        }}
      >
        <LeftArrowIcon />
      </div>
      {projectData.title}
    </div>
  );
};

const MyName = ({ show }: { show: boolean }): JSX.Element => {
  const containerClass = classNames("header-switch", {
    "header-switch-hidden": !show,
    "header-switch-display": show,
  });
  const containerStyle = {
    display: "flex",
    fontSize: "3.5vw",
    fontWeight: "bold",
  } as React.CSSProperties;
  return (
    <div style={containerStyle} className={containerClass}>
      <div className="flex-box name-style">
        Webb Hinton
        <div className="flex-box">
          <SocialIcon imgSrc="github.svg" url="https://github.com/wyhinton" />
          <SocialIcon
            imgSrc="linkedin.svg"
            url="https://www.linkedin.com/in/webb-hinton-09930012b/"
          />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({
  imgSrc,
  url,
}: {
  imgSrc: string;
  url: string;
}): JSX.Element => {
  return (
    <a href={url} target="_blank">
      <img
        className={"social-icon"}
        src={`${process.env.PUBLIC_URL}/${imgSrc}`}
      />
    </a>
  );
};
