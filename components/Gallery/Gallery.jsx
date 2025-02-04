import ProjectCard from "../ProjectCard/ProjectCard"

const projectData = [
    {
        image:'/work/3.png',
        category:'Portraits',
        name:'February 11, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/5.png',
        category:'Models',
        name:'April 16, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/6.png',
        category:'Places',
        name:'Nov 02, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/7.png',
        category:'Corporate',
        name:'Jan 22, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/8.png',
        category:'fashion',
        name:'Jan 23, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/9.png',
        category:'fashion',
        name:'May 31, 2023',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/10.png',
        category:'Corporate',
        name:'Aug 12, 2024',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    {
        image:'/work/3.png',
        category:'Models',
        name:'Aug 12, 2024',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum, modi',
        link:'/',
        codepen:'/',
    },
    
]

export default function Gallery(){
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Gallery
                </h2>
                <div>
                    {
                        projectData.map((project)=>{
                            return(
                                <ProjectCard project={project}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}