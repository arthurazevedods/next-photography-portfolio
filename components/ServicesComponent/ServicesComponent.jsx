import { Smile, Scan, Bird } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const serviceData = [
    {
        icon: <Smile size={48} strokeWidth={1}/>,
        title: 'Portraiture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.'
    },
    {
        icon: <Scan size={48} strokeWidth={1}/>,
        title: 'Landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.'
    },
    {
        icon: <Bird size={48} strokeWidth={1}/>,
        title: 'Life Style',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.'
    },
];


export default function ServicesComponent() {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">Our Services</h2>

                {/*Services Items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {
                        serviceData.map((item, index) => {
                            return (
                                <Card 
                                key={index} 
                                className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center 
                                cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-700'>
                                    <CardHeader className='text-primary'>
                                        <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className='text-center'>
                                        <CardTitle className='mb-4'>
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className='text-lg'>
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}