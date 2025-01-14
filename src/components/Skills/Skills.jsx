import React from 'react';
// import { CircularProgress, Typography, Box } from '@mui/material';
import './Skills.css';
import { useState } from 'react';
import { colors } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';


// const skills = [
//     { name: 'HTML', value: 90, color: '#FF5733' }, // Orangish
//     { name: 'CSS', value: 85, color: '#3498DB' }, // Bluish
//     { name: 'JavaScript', value: 80, color: '#F7DF1E' }, // Yellowish
//     { name: 'React', value: 75, color: '#61DAFB' }, // Light Blue
//     { name: 'Core Java', value: 70, color: '#007396' }, // Java Blue
//     { name: 'DSA', value: 65, color: '#FF5733' }, // Reuse Orangish
//     { name: 'Git & GitHub', value: 60, color: '#F1502F' }, // Git Red
// ];



const Skills = () => {

  const skillList = [
    { icon: "fa-solid fa-code", skill: "Frontend" },
    { icon: "fa-solid fa-server", skill: "Backend" },
    { icon: "fa-solid fa-code-branch", skill: "Version Control" },
    { icon: "fa-solid fa-comments", skill: "Soft Skills" },
  ];
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
    //    <>
    //    <h1>SKILLS</h1>
    //     <Box display="flex" flexWrap="wrap" justifyContent="space-around">
    //         {skills.map((skill) => (
    //             <Box key={skill.name} textAlign="center" m={2}>
    //                 <CircularProgress variant="determinate" value={skill.value} size={100} sx={{color: skill.color,}} />
    //                 <Typography variant="h6" component="div" mt={1} sx={{fontFamily: "Poppins"}}>
    //                     {skill.name}
    //                 </Typography>
    //                 {/* <Typography variant="body2" color="textSecondary">
    //                     {skill.value}%
    //                 </Typography> */}
    //             </Box>
    //         ))}
    //     </Box>
       
    //    </>
    <>
    <h1>SKILLS</h1>
    <div className="skills-container">
    <div className="left">
  <h3 className='dummy'>Categories</h3>
  
  <div onClick={() => { setActiveArray(newArray[0]); setSkillHeading("Frontend skills"); }}>
    <i className="fas fa-code"></i>
    <span>Frontend</span>
  </div>
  
  <div onClick={() => { setActiveArray(newArray[1]); setSkillHeading("Backend skills"); }}>
    <i className="fas fa-server"></i>
    <span>Backend</span>
  </div>
  
  <div onClick={() => { setActiveArray(newArray[2]); setSkillHeading("Version Control"); }}>
    <i className="fas fa-code-branch"></i>
    <span>Version Control</span>
  </div>
  
  <div onClick={() => { setActiveArray(newArray[3]); setSkillHeading("Soft Skills"); }}>
    <i className="fas fa-user-friends"></i>
    <span>Soft Skills</span>
  </div>
</div>


        <div className="right">
          <h3>{skillHeading}</h3>
      
          {activeArray.map((sk,index)=>(
              <div key={index} className="skill">
                  <div className="tech">
                  <div className="name">
                  <i id='icon' className={sk.icon}></i>
                  <span>{sk.skill}</span>
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