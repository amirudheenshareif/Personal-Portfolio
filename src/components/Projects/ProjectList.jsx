import Projects from './Projects'


export const ProjectList = () => {
    const projectData = [
        { name: 'DynamicWeather1', description: 'Weather app 1' },
        { name: 'DynamicWeather2', description: 'Weather app 2' },
        { name: 'DynamicWeather3', description: 'Weather app 3' },
        { name: 'DynamicWeather3', description: 'Weather app 3' },
      ];
      console.log("Hi");
    return(
        <>
        <Projects data={projectData}/>
        </>
    );
}
