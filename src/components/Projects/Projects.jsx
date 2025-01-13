import React from 'react'
import './Projects.css'

const Projects = ({data=[]}) => {
    console.log(data);
  return (
    <>
    <div className="mainContainer-projects">
        <h1>PROJECTS</h1>
        <div className="flexBox">
            {data.map((project,index)=>(
                <div className="flexItem" key={index}>
                    <img src="https://placehold.co/250x250" alt="" />
                    <h2>{project.name}</h2>
                    <p> {project.description}</p>
                </div>
            ))}
        </div>

    </div>
    
    </>
  )
}

export default Projects;



