import "./styles.css";

import { AmbientLight, DirectionLight, GLTFModel } from "react-3d-viewer";

import React from "react";

const ModelViewer = ({ src }: { src: string }) => {
  const modelPath =
    "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";
  return (
    <div>
      <GLTFModel src={modelPath}>
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </div>
  );
};
