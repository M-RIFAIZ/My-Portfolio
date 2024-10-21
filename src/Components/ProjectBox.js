import React from 'react';
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    BenzerDesc: "I developed a tailor app utilizing HTML, CSS, Node.js, and JavaScript to streamline the tailoring process. This application provides an intuitive user interface for managing orders, measurements, and customer details.",
    BenzerWebsite: "",

    ThemountDesc: "I developed a responsive menu for an institute website using HTML, CSS, and JavaScript. This menu enhances user navigation, providing a seamless browsing experience across various devices.",
    ThemountWebsite: "",

    StackDesc: "I developed the Stack Centre website using the MERN stack, creating a seamless user experience with modern design and functionality. The platform is tailored to manage content efficiently while providing a dynamic and responsive interface for users.",
    StackWebsite: "https://www.stackcentre.in/",

    DatesDesc: "Our dates website is designed to provide users with an engaging and interactive experience. With a clean and responsive layout built using HTML, CSS, and JavaScript",
    DatesWebsite: "https://dateswith.ca/",

   
  };

  const showDemo = desc[`${projectName}Website`] ? "inline-block" : "none";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[`${projectName}Desc`]}
        <br />



        <a style={{ display: showDemo }} href={desc[`${projectName}Website`]} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
