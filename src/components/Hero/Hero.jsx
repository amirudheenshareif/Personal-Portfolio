import React from 'react';
import profile from '../../assets/hero-img.png';
import gitubIcon from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.svg';
import './Hero.css';
import { colors } from '@mui/material';


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
                    <div className="resume"><button>Resume</button></div>
    
                </section>
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
            </div>
    
        </>
      )
}
