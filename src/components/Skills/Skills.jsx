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
    { skill: "SQL", icon: "fas fa-file-code", width: "55%" },
    { skill: "Supabase", icon: "fas fa-database", width: "55%" },
    { skill: "Clerk", icon: "fas fa-server", width: "50%" },
    { skill: "REST APIs", icon: "fas fa-link", width: "60%" },
  ];

  const libraries = [
    { skill: "Framer Motion", icon: "", width: "70%" },
    { skill: "ShadCN", icon: "", width: "80%" },
    { skill: "Tailwind CSS", icon: "", width: "80%" },
    { skill: "Vite", icon: "", width: "75%" },
  ];
  
  const versionControl = [
    { skill: "Git", icon: "fas fa-code-branch", width: "70%" },
    { skill: "GitHub", icon: "fab fa-github", width: "75%" },
    { skill: "Branching", icon: "fas fa-tree", width: "75%" },
    { skill: "Merging", icon: "fas fa-code-merge", width: "70%" },
  ];
  

  const newArray = [frontend, backend, libraries , versionControl];
  const[activeArray, setActiveArray] = useState(newArray[0]);
  const[skillHeading, setSkillHeading] = useState("Frontend Skills");
  const[activeDiv, setActiveDiv] = useState("frontend");

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
          setActiveDiv("frontend");
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={activeDiv === "frontend" ? "active" : ""}
      >
        <i className="fas fa-code"></i>
        <span>Frontend</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[1]);
          setSkillHeading("Backend skills");
          setActiveDiv("backend");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.9 }}
        className={activeDiv === "backend" ? "active" : ""}
      >
        <i className="fas fa-server"></i>
        <span>Backend</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[2]);
          setSkillHeading("Libraries / Tools");
          setActiveDiv("Lib/Tools");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.9 }}
        className={activeDiv === "Lib/Tools" ? "active" : ""}
      >
        <i className="fas fa-user-friends"></i>
        <span>Libraries / Tools</span>
      </motion.div>

      <motion.div
        onClick={() => {
          setActiveArray(newArray[3]);
          setSkillHeading("Version Control");
          setActiveDiv("versionControl");
        }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale:0.9 }}
        className={activeDiv === "versionControl" ? "active" : ""}
      >
        <i className="fas fa-code-branch"></i>
        <span>Version Control</span>
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