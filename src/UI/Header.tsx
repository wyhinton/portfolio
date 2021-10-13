import "../css/header.css";

import React, { FC, useEffect, useState } from "react";

const Header = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  7;
  const nameStyle = {
    fontSize: "3.5vw",
    width: "min-content"
  }

  const containerStyle = {
    display: 'flex',
    // flexDirection: "column",
    // fontFamily: 'VCR_OSD_MONO',
    fontSize: "3.5vw",
    fontWeight: "bold",
    // width: "min-content",
  } as React.CSSProperties
  return (
    <div className={"header-container"}>
      <div style = {containerStyle}>
   
        {/* <h1 style = {nameStyle} > */}
 
          <div className="flex-box name-style" >
          Webb Hinton
          <div className = "flex-box">
        <SocialIcon imgSrc="github.svg" url="https://github.com/wyhinton" />
        <SocialIcon
          imgSrc="linkedin.svg"
          url="https://www.linkedin.com/in/webb-hinton-09930012b/"
        />
        </div>
          </div>


        {/* </h1> */}
        {/* <SocialIcon imgSrc="github.svg" url="https://github.com/wyhinton" />
        <SocialIcon
          imgSrc="linkedin.svg"
          url="https://www.linkedin.com/in/webb-hinton-09930012b/"
        /> */}
      </div>
      {children}
    </div>
  );
};

export default Header;

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
