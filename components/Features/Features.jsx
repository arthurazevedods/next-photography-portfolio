import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Icon } from 'lucide-react';

const feats = [
    {
        name: 'PHOTOGRAPHY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Portfolio Lists',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.',
        icon: LockClosedIcon,
    },
    {
        name: 'Fully Customizable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Free plugins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.',
        icon: FingerPrintIcon,
    }
];

export default function Features() {
    return (
        <section className="pb-12 xl:py-24">
            <div className='container mx-auto'>
                <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">Key Features</h2>

                <div className="flex flex-col">
                    <div className="mx-auto max-w-7xl text center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className='mt-6 text-lg leading-8 text-black dark:text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat metus risus, in scelerisque magna mattis vel.
                        </p>
                    </div>

                </div>

                {/* Features list */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                        {feats.map((feat) => (
                            <div key={feat.name} className="relative hover:scale-110 transition-all">
                                <dt className='text-base font-semibold leading-7 text-muted-foreground justify-center'>
                                    <div className="flex flex-col items-center justify-center h-[100px] w-[100px] bg-primary rounded-full mb-4">
                                        <feat.icon className="h-[36px] w-[36px] text-white" aria-hidden="true" />
                                    </div>
                                    <div className="text-dark dark:text-white">{feat.name}</div>
                                </dt>
                                <dd className='mt-2 text-base leading-7'>
                                    <p className="text-gray-600">{feat.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
