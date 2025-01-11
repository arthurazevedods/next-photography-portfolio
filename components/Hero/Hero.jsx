import { Input } from '../ui/input';
import { Button } from "../ui/button";
import Link from "next/link";
import { RiMailAddLine, RiBookmark3Fill, RiUserFollowFill  } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import Socials from '../Socials/Socials';
import HeroImage from '../HeroImage.jsx/HeroImage';
import Badge from '../Badge/Badge';

export default function Hero() {
    return (
        <section className="py-4 xl:py-8 h-[auto] bg-bottom">
    <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
            {/**Left side content */}
            <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                    Photography
                </div>
                <h1 className="h1 uppercase">Frase de efeito!</h1>
                <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat
                    metus risus, in scelerisque magna mattis vel. Praesent ac sem faucibus,
                    elementum lorem sed, porta turpis.
                </p>

                <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx:0 mb-12">
                    <div className="flex w-full gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email Address
                        </label>
                        <Input type="email" id="email" placeholder="Email" />
                        <Link href="/contato">
                            <Button className="gap-x-2 bg-black">
                                Subscribe <RiMailAddLine size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
                <Socials
                    containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                    iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                />
            </div>

            {/**Banner Image */}
            <div className="hidden xl:flex relative">
                <HeroImage
                    imgSrc="./about/photography.svg"
                    containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
                />
            </div>
        </div>

        {/** Badge Section */}
        <section className="py-2 sm:py-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {/* Badge 1 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-muted-foreground">Anos de Experiência</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            <Badge 
                                icon={<RiBookmark3Fill />}
                                endCountNum={6}
                                endCountText="+"
                                badgeText=""
                            />
                        </dd>
                    </div>

                    {/* Badge 2 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-muted-foreground">Trabalhos</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            <Badge 
                                icon={<MdAddAPhoto />}
                                endCountNum={120}
                                endCountText="+"
                                badgeText=""
                            />
                        </dd>
                    </div>

                    {/* Badge 3 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-muted-foreground">Seguidores</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            <Badge 
                                icon={<RiUserFollowFill />}
                                endCountNum={1000}
                                endCountText="+"
                                badgeText=""
                            />
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    </div>
</section>

    )
}