import Projects from './Projects'



export const ProjectList = () => {
    const projectData = [
        { 
          name: 'Portfolio website',
          githubLink:"https://github.com/amirudheenshareif/Personal-Portfolio",
          siteLink:"https://amirudheenshareif.github.io/Personal-Portfolio/",
          imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//Portfolio-bg.png" 
        },
        { 
          name: 'JobVerse',
          githubLink:"https://github.com/amirudheenshareif/JobVerse",
          siteLink:"https://job-verse-dusky.vercel.app/",
          imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//landing-page-imgpng.png" 
        },
        { name: 'Weather Tracker',
          githubLink:"https://github.com/amirudheenshareif/Dynamic-Weather-Tracker", 
          siteLink:"https://dynamic-weather-tracker.vercel.app/",
          imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//weather-app.png"
        },
        { 
          name: 'Skill Swap (Under Development)',
          githubLink:"",
          siteLink:"",
          imgLink:"https://placehold.co/200x200" 
        },
      ];
      console.log("Hi");
    return(
        <>
        <Projects data={projectData}/>
        </>
    );
}
