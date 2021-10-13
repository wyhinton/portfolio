import "../css/linkIcon.css";

import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useToggle } from "../hooks";

const LinkIcon = ({ href }: { href: string }): JSX.Element => {
  const [visited, setVisited] = useState(false);
  const LinkStyle = {
    width: "fit-content",
    height: "max(30px, 2.5vw)",
    // marginTop: 28,
    fill: visited ? "purple" : "blue",
    position: "absolute",
    bottom: "12%",
  } as React.CSSProperties;
  const [isHovered, toggleIsHovered] = useToggle(false);

  const normalSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={LinkStyle}
        className={"link-icon"}
      >
        <path d="M14.78 3.653a3.936 3.936 0 115.567 5.567l-3.627 3.627a3.936 3.936 0 01-5.88-.353.75.75 0 00-1.18.928 5.436 5.436 0 008.12.486l3.628-3.628a5.436 5.436 0 10-7.688-7.688l-3 3a.75.75 0 001.06 1.061l3-3z" />
        <path d="M7.28 11.153a3.936 3.936 0 015.88.353.75.75 0 001.18-.928 5.436 5.436 0 00-8.12-.486L2.592 13.72a5.436 5.436 0 107.688 7.688l3-3a.75.75 0 10-1.06-1.06l-3 3a3.936 3.936 0 01-5.567-5.568l3.627-3.627z" />
      </svg>
    );
  };
  const hoverSvg = () => {
    return <img src={`${process.env.PUBLIC_URL}/Link_Hover.svg`}></img>;
  };

  return (
    // <div
    //   onClick={(e) => {
    //     window.open(href, "_blank");
    //     setVisited(true);
    //     e.stopPropagation();
    //   }}
    //   onMouseEnter={() => {
    //     toggleIsHovered();
    //   }}
    //   onMouseLeave={() => {
    //     toggleIsHovered();
    //   }}
    // >
      <a href={href} target="_blank">
        {/* {isHovered ? normalSvg() : hoverSvg()} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={LinkStyle}
          className={"link-icon"}
        >
          <path d="M14.78 3.653a3.936 3.936 0 115.567 5.567l-3.627 3.627a3.936 3.936 0 01-5.88-.353.75.75 0 00-1.18.928 5.436 5.436 0 008.12.486l3.628-3.628a5.436 5.436 0 10-7.688-7.688l-3 3a.75.75 0 001.06 1.061l3-3z" />
          <path d="M7.28 11.153a3.936 3.936 0 015.88.353.75.75 0 001.18-.928 5.436 5.436 0 00-8.12-.486L2.592 13.72a5.436 5.436 0 107.688 7.688l3-3a.75.75 0 10-1.06-1.06l-3 3a3.936 3.936 0 01-5.567-5.568l3.627-3.627z" />
        </svg>
      </a>
    // </div>
  );
};

export default LinkIcon;
