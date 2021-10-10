import React, { useState, useEffect, FC } from "react";

const LocalImage = ({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  alt: string;
}): JSX.Element => {
  return (
    <img
      className={"local-image"}
      alt={alt}
      src={`${process.env.PUBLIC_URL}/${imgSrc}`}
    />
  );
};

export default LocalImage;
