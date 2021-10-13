
import React, { FC, useEffect, useState } from "react";

const Caption = ({
  text,
}: {
  text: string
}): JSX.Element => {
  
  const elem = makeElem(text)

  return (
    <>
     {elem}
    </>
  );
};

export default Caption;

function getStringInBetween(string: string, start: string , end: string): string {
  // start and end will be excluded
  let indexOfStart = string.indexOf(start)
  indexOfStart = indexOfStart + start.length;
  const newString = string.slice(indexOfStart)
  const indexOfEnd = newString.indexOf(end)
  return newString.slice(0, indexOfEnd)
}

function makeElem(text: string){
  if (text.includes("<a") && text.includes("</a>")){
    const linkText = getStringInBetween(text, ">", "<")
    const start = text.split('<a')[0];
    const end = text.split('</a>')[1]
    const link = getStringInBetween(text,'"','"')
    console.log(linkText, start, end, link);
    console.log(end);
    return(
      <caption>{start}
      <a href ={link} target="_blank" rel="noreferrer">{linkText}</a>
      {/* {end} */}
      </caption>
    )
  } else {
    return <caption>{text}</caption>
  }
}