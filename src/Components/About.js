import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';



const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Rifai</b> and I am from Kasaragod , Kerala India.
            I'm a <b>MERN stack web developer</b>. <br /><br />
            I have done an internship as a <b>MERN Stack Developer</b> At Stack Technology Centre.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skill's</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='CSS' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='HTML' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
      
    </>
  )
}

export default About