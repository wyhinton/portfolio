const AboutSection = (): JSX.Element => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  } as React.CSSProperties;
  return (
    <div style={containerStyle}>
      <h1>
        Webb Hinton is a software developer and multimedia designer based in
        Raleigh, NC. They are interested in creating alternative tools for
        creatives, experimental digital art, and digital humanities. 
        <br></br>
        <br></br>
        They are currently finishing a masters in Art + Design at North Carolina State University and working as a data science consultant at D.H. Hill Library.

      </h1>
    </div>
  );
};
export default AboutSection;
