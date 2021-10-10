import React, { CSSProperties, useState } from "react";

import classNames from "classnames";

interface SmoothImageProps {
  src: string;
  alt: string;
  placeholderImgUrl?: string;
}

const SmoothImage = ({ src, alt, placeholderImgUrl }: SmoothImageProps) => {
  const loadedStyle = {
    opacity: 1,
  };
  const nonLoadedStyle = {
    opacity: 0,
  };
  const [isLoaded, setIsLoaded] = useState(nonLoadedStyle);
  const myClass = classNames("smooth-image", {
    "smooth-image-loaded": isLoaded,
    "smooth-image-loading": !isLoaded,
  });

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={isLoaded}
        onLoad={(e) => {
          setIsLoaded(loadedStyle);
        }}
      />
    </>
  );
};

export default SmoothImage;
