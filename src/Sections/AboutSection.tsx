const AboutSection = (): JSX.Element => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  } as React.CSSProperties;
  return (
    <div style={containerStyle}>
      <h1>
        Webb Hinton is a software developer and multimedia designer based in
        Raleigh, NC. There interested in creating accessible tools which empower
        creatives, experimental digital arts, and digital humanities.
      </h1>
    </div>
  );
};
export default AboutSection;
