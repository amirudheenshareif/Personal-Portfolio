import React from 'react';
import profile from '../../assets/hero-img.png';
import gitubIcon from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.svg';
import './Hero.css';
import { colors } from '@mui/material';
import { motion } from 'framer-motion';


export const Hero = () => {
    return (
        <>
            <div className="mainContainer">
                <section>
                    <h1>AMIRUDHEEN <br /> SHAREIF</h1>
                    <h3>FRONTEND DEVELOPER</h3>
                    <div className="icons">
                        <a href="https://github.com/amirudheenshareif">
                            <img src={gitubIcon}  alt="" />
                            </a>
                            <a href="##">
                                <img src={linkedInIcon} alt="" />
                                </a>        
                    </div>
                    <div className="summary">
                        <p>With a passion for developing modern React web apps for commercial businesses.</p>
                    </div>
                    {/* <div className="resume"><button>Resume</button></div> */}
                    <motion.button
        whileHover={{
          scale: 1.2, // Increases size on hover
          backgroundColor: "#3498db", // Changes background color
          color: "#fff", // Changes text color
        }}
        whileTap={{
          scale: 0.9, // Shrinks slightly when clicked
          backgroundColor: "#2980b9", // Darker shade on tap
        }}
        transition={{ type: "spring", stiffness: 300 }} // Spring effect
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#3498db", 
          color: "#fff", 
        }}
      >
        Resume
      </motion.button>
    
                </section>
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
            </div>
    
        </>
      )
}
