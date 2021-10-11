import "../css/project.css";
import "../css/collapsible.css";

import { ContentType } from "../enums";
import ModelViewer from "./ModelViewer";
import { ProjectAssetData } from "../interfaces/ProjectAssetData";
import React from "react";
import ReactPlayer from "react-player";
import SmoothImage from "./SmoothImage";

const ProjectAsset = ({
  projectAsset,
  projectOpen,
  index,
}: {
  projectAsset: ProjectAssetData;
  projectOpen: boolean;
  index: number;
}): JSX.Element => {
  const { caption } = projectAsset;

  const fadeInStyle = {
    willChange: "transform",
    opacity: 0,
    animation: `fade-in ${
      (index + 1) * 0.5
    }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  };
  return (
    <>
      <div
        className="flex-column asset-container fade-in"
        style={projectOpen ? fadeInStyle : { opacity: 0 }}
      >
        <caption>{caption}</caption>
        {getAsset(projectAsset, projectOpen)}
      </div>
    </>
  );
};

const getAsset = (
  asset: ProjectAssetData,
  projectOpen: boolean
): JSX.Element => {
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
      //   if (asset.src.includes("Ayla_Gizlice_Desktop")) {
      //     videoWidth = "1920px";
      //   }
      if (asset.src.includes("Eager_Rhizome_Lettering")) {
        videoWidth = "1000px";
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
    case ContentType.MODEL:
      const modelPath =
        "https://raw.githubusercontent.com/wyhinton/portfolio/main/public/Eager_Rhizome_Model/scene.gltf";
      assetElement = <ModelViewer src={modelPath}></ModelViewer>;
      break;
    default:
      assetElement = <div>hello</div>;
      break;
  }

  return assetElement;
};

export default ProjectAsset;
