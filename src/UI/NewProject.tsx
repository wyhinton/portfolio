import "../css/project.css";
import "../css/collapsible.css";

import React, { FC, useEffect, useRef, useState } from "react";

import Collapsible from "react-collapsible";
import { ContentType } from "../enums";
import { ProjectAsset } from "../interfaces/ProjectAsset";
import ProjectData from "../classes/ProjectData";
import ReactPlayer from "react-player";
import ScrollHorizontal from "react-scroll-horizontal";
import SmoothImage from "./SmoothImage";
import useDimensions from "react-cool-dimensions";
import useWindowWidth from "react-hook-use-window-width";

const NewProject = ({
  projectData,
  index,
}: {
  projectData: ProjectData;
  index: number;
}): JSX.Element => {
  const { title, description, date, tags, assets } = projectData;
  console.log(projectData);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const containerSize = useRef<HTMLDivElement>(null);
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });
  const assetElements = (): JSX.Element => {
    return (
      <div className={"assets-array-container"} ref={observe}>
        {assets.map((asset) => {
          return getAsset(asset, isOpen);
        })}
      </div>
    );
  };
  useEffect(() => {
    console.log(width);
    console.log(windowWidth);
    if (windowWidth < width) {
      setIsScrollable(true);
    } else {
      console.log("SETTING TO NOT SCROLL");
      setIsScrollable(false);
    }
  }, [windowWidth, isOpen]);
  return (
    // <ScrollHorizontal>
    <div
      style={{
        // webkitAnimation: `slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        animation: `slide-in-top ${
          index * 0.2
        }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      }}
    >
      <Collapsible
        transitionTime={200}
        trigger={title}
        onOpen={() => {
          setIsOpen(true);
        }}
        onClose={() => {
          setIsOpen(false);
        }}
        //   className={""}
      >
        <div className={"project-container"}>
          <p>{description}</p>
          <ScrollHorizontal>
            <div className={"assets-array-container"} ref={observe}>
              {assets.map((asset) => {
                return getAsset(asset, isOpen);
              })}
            </div>
          </ScrollHorizontal>
          {/* {isScrollable ? (
            <ScrollHorizontal>{assetElements}</ScrollHorizontal>
          ) : (
            <div className={"assets-array-container"} ref={observe}>
              {assets.map((asset) => {
                return getAsset(asset, isOpen);
              })}
            </div>
          )} */}
          {/* <ScrollHorizontal>
          <div className={"assets-array-container"} ref={observe}>
            {assets.map((asset) => {
              return getAsset(asset);
            })}
          </div>
        </ScrollHorizontal> */}
        </div>
      </Collapsible>
    </div>
  );
};

export default NewProject;

const getAsset = (asset: ProjectAsset, projectOpen: boolean): JSX.Element => {
  console.log(asset.kind);
  let assetElement = <div>hello</div>;
  switch (asset.kind) {
    case ContentType.PHOTO:
      //   console.log("WAS PHOTO");
      assetElement = (
        <SmoothImage src={asset.src} alt={"project photo"}></SmoothImage>
      );
      break;
    case ContentType.VIDEO:
      let videoWidth = "auto";
      if (asset.src.includes("Ayla_Gizlice_Desktop")) {
        videoWidth = "1920px";
      }
      if (asset.src.includes("Eager_Rhizome_Lettering")) {
        videoWidth = "100%";
      }
      assetElement = (
        <ReactPlayer
          height={"100%"}
          width={videoWidth}
          play={projectOpen}
          loop={true}
          autoplay={true}
          mute={true}
          url={asset.src}
          controls={true}
          playsinline={true}
        >
          hello
        </ReactPlayer>
      );
      break;
    default:
      assetElement = <div>hello</div>;
      break;
  }
  if (asset.link) {
    return (
      <a href={asset.link} target="_blank">
        {assetElement}
      </a>
    );
  } else {
    return assetElement;
  }
};
