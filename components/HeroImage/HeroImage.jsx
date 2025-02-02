import Image from "next/image";

export default function HeroImage({ containerStyles, imgSrc}){
    return (
        <div className={`${containerStyles}`}>
            <Image 
                src={imgSrc} fill priority
                alt="image"
            />
        </div>
    )
}