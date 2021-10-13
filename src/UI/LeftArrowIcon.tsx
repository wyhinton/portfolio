import "../css/linkIcon.css";

import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useToggle } from "../hooks";

const LeftArrowIcon = (): JSX.Element => {
  // const LinkStyle = {
  //   width: "fit-content",
  //   height: "max(30px, 2.5vw)",
  //   // marginTop: 28,
  //   fill: visited ? "purple" : "blue",
  //   position: "absolute",
  //   bottom: "12%",
  // } as React.CSSProperties;

  return (
    <div className={"icon-container"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="white"
        // style={{
        //   width: 50,
        //   height: 50,
        // }}
        className="header-icon"
      >
        <path
          fill-rule="evenodd"
          d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
        />
      </svg>
    </div>
  );
};

export default LeftArrowIcon;
