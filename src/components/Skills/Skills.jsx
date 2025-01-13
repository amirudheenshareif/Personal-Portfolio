import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import './Skills.css';

const skills = [
    { name: 'HTML', value: 90, color: '#FF5733' }, // Orangish
    { name: 'CSS', value: 85, color: '#3498DB' }, // Bluish
    { name: 'JavaScript', value: 80, color: '#F7DF1E' }, // Yellowish
    { name: 'React', value: 75, color: '#61DAFB' }, // Light Blue
    { name: 'Core Java', value: 70, color: '#007396' }, // Java Blue
    { name: 'DSA', value: 65, color: '#FF5733' }, // Reuse Orangish
    { name: 'Git & GitHub', value: 60, color: '#F1502F' }, // Git Red
];

const Skills = () => {
    return (
       <>
       <h1>SKILLS</h1>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            {skills.map((skill) => (
                <Box key={skill.name} textAlign="center" m={2}>
                    <CircularProgress variant="determinate" value={skill.value} size={100} sx={{color: skill.color,}} />
                    <Typography variant="h6" component="div" mt={1} sx={{fontFamily: "Poppins"}}>
                        {skill.name}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                        {skill.value}%
                    </Typography> */}
                </Box>
            ))}
        </Box>
       
       </>
    );
};

export default Skills;