import Image from "next/image"
import { Card, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"

export default function ProjectCard({project}){
    return(
        
        <Card className='group overflow-hidden relative'>
            <CardHeader className='p-0'>
                <div 
                className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
                    <Image 
                        src={project.image} 
                        width={440} 
                        height={200} 
                        alt='image' 
                        priority
                        className="absolute  top-0 shadow-2xl hover:scale-110 transition-all"
                    />
                </div>
            </CardHeader>

            <div>
                <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                    {project.category}
                </Badge>
                <h4 className="h4 mb-1">
                    {project.name}
                </h4>
                <p>
                    {project.description}
                </p>
            </div>
        </Card>
    )
}