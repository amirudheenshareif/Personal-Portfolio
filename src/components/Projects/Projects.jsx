import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion';
import githubIcon from '../../assets/github-dark.svg'
import redirectIcon from '../../assets/maximize.png'

const Projects = ({data=[]}) => {
    console.log(data);
  return (
    <>
    <div className="mainContainer-projects">
        <h1>PROJECTS</h1>
        <div className="flexBox">
            {data.map((project,index)=>(
                <div className="flexItem" key={index}>
                       <motion.img className='projectImg'
                src={project.imgLink} // Replace with project.image for dynamic images
                alt={project.name}
                // animate={{
                //   scale: [1, 1.1, 1], // Keyframe animation: normal -> zoom -> normal
                //   rotate: [0, 10, -10, 0], // Keyframe animation: slight tilt
                // }}
                // transition={{
                //   duration: 2, // Duration of the animation cycle
                //   repeat: Infinity, // Repeat indefinitely
                //   repeatType: "reverse", // Reverse direction on repeat
                // }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
                    <h2>{project.name}</h2>
                    <div className="iconWrapper">
                      <a href={project.githubLink}><img src={githubIcon} alt="githubIcon" /></a>
                      <a href={project.siteLink}><img src={redirectIcon} alt="redirectIcon" /></a>
                    </div>
                </div>
            ))}
        </div>

    </div>
    
    </>
  )
}

export default Projects;



