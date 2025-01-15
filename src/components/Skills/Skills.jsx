import React from 'react';
import './Skills.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';




const Skills = () => {

  const frontend = [
    { skill: "HTML", icon: "fas fa-code", width: "90%" },
    { skill: "CSS", icon: "fas fa-paint-brush", width: "85%" },
    { skill: "JavaScript", icon: "fab fa-js", width: "80%" },
    { skill: "React", icon: "fab fa-react", width: "75%" },
  ];
  
  const backend = [
    { skill: "Node.js", icon: "fab fa-node", width: "85%" },
    { skill: "Express.js", icon: "fas fa-server", width: "80%" },
    { skill: "MongoDB", icon: "fas fa-database", width: "75%" },
    { skill: "REST APIs", icon: "fas fa-link", width: "70%" },
  ];
  
  const versionControl = [
    { skill: "Git", icon: "fas fa-code-branch", width: "80%" },
    { skill: "GitHub", icon: "fab fa-github", width: "85%" },
    { skill: "Branching", icon: "fas fa-tree", width: "75%" },
    { skill: "Merging", icon: "fas fa-code-merge", width: "70%" },
  ];
  
  const softSkills = [
    { skill: "Communication", icon: "fas fa-comments", width: "90%" },
    { skill: "Teamwork", icon: "fas fa-users", width: "85%" },
    { skill: "Problem Solving", icon: "fas fa-lightbulb", width: "80%" },
    { skill: "Adaptability", icon: "fas fa-sync-alt", width: "75%" },
  ];
  
  
  const newArray = [frontend, backend, versionControl, softSkills];
  const[activeArray, setActiveArray] = useState(newArray[0]);
  const[skillHeading, setSkillHeading] = useState("Frontend Skills");

    return (
    <>
    <h1>SKILLS</h1>
    <div className="skills-container">
    <div className="left">
  <h3>Categories</h3>
  
  <motion.div
        onClick={() => {
          setActiveArray(newArray[0]);
          setSkillHeading("Frontend skills");
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-code"></i>
        <span>Frontend</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[1]);
          setSkillHeading("Backend skills");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-server"></i>
        <span>Backend</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[2]);
          setSkillHeading("Version Control");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale:0.9 }}
      >
        <i className="fas fa-code-branch"></i>
        <span>Version Control</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[3]);
          setSkillHeading("Soft Skills");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-user-friends"></i>
        <span>Soft Skills</span>
      </motion.div>
</div>


        <div className="right">
          <h3>{skillHeading}</h3>
      
          {activeArray.map((sk,index)=>(
              <div key={index} className="skill">
                  <div className="tech">
                  <div className="name">
                  <i id='icon' className={sk.icon}></i>
                  <span id='skillName'>{sk.skill}</span>
                  </div>
                  <span id='width'>{sk.width}</span>
                  </div>
                  <div className="progress-bar">
      <div className="progress" style={{ width: sk.width }}></div>
    </div>
              </div>
          ))
          }
            
        </div>
    </div>
    
    </>

    );
};

export default Skills;