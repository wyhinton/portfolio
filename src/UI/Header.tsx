import "../css/header.css";

import React, { FC, useEffect, useState } from "react";

const Header = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  7;
  return (
    <div className={"header-container"}>
      <div className={"flex-box"}>
        <h1>Webb Hinton</h1>
        <SocialIcon imgSrc="github.svg" url="https://github.com/wyhinton" />
        <SocialIcon
          imgSrc="linkedin.svg"
          url="https://www.linkedin.com/in/webb-hinton-09930012b/"
        />
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
    <h1 className={"social-header-container"}>
      <a href={url} target="_blank">
        <img
          className={"social-icon"}
          src={`${process.env.PUBLIC_URL}/${imgSrc}`}
        />
      </a>
    </h1>
  );
};
