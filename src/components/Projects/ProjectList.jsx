import Projects from './Projects'



export const ProjectList = () => {
    const projectData = [
      { 
        name: 'Job Portal App',
        githubLink:"https://github.com/amirudheenshareif/JobVerse",
        siteLink:"https://job-verse-dusky.vercel.app/",
        imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//jobverse-bg.webp" 
      },
      { 
        name: 'AI - Data Query Dashboard',
        githubLink:"https://github.com/amirudheenshareif/Data_Query_Dashboard",
        siteLink:"https://dashboardassign.vercel.app/",
        imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//askmetrics%20bg.webp" 
      },
      { name: 'WebWit',
        githubLink:"https://github.com/amirudheenshareif/WebWit-BlogApp", 
        siteLink:"https://web-wit-blog-app.vercel.app/",
        imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//web-wit-landing-page%20(1).webp"
      },
      { 
        name: 'Portfolio website',
        githubLink:"https://github.com/amirudheenshareif/Personal-Portfolio",
        siteLink:"https://amirudheenshareif.github.io/Personal-Portfolio/",
        imgLink:"https://rngfefhpsfpbbwcrfhze.supabase.co/storage/v1/object/public/company-logo//Portfolio-bg.webp" 
      },
        
      ];
    return(
        <>
        <Projects data={projectData}/>
        </>
    );
}
