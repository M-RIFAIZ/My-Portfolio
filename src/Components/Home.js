import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiMail, CiPhone, CiCoffeeCup } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>RIFAI</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'> <b>Introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product
            that impacts lives. I want to do work that challenges me as a developer &
            work that I can be proud of.<br /><br />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Avatar" />
        </Tilt>
      </div>

      <div className='ContactInfo'>
        <div className='ContactDetails'>
          <a href="mailto:rifaiymd7@gmail.com">
            <CiMail size={24} />
            <p>Email:  rifaiymd7@gmail.com</p>
          </a>
        </div>
        <div className='ContactDetails'>
          <CiPhone size={24} />
          <a href="tel:+917012836911">Phone: +91 7012836911</a>
        </div>
      </div>

      <div className='SocialMedia'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp size={24} />
        </a>
        <a href='https://github.com/M-RIFAIZ' target='_blank' rel='noopener noreferrer'>
          <FaGithub size={24} />
        </a>
        <a href='www.linkedin.com/in/m-rifaiz' target='_blank' rel='noopener noreferrer'>
          <FaLinkedinIn size={24} />
        </a>
        <a href='https://www.instagram.com/rifa.1_' target='_blank' rel='noopener noreferrer'>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default Home;
