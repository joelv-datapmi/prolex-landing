import Image, { StaticImageData } from "next/image"
import backgroundImage from "@/public/features/background.avif"

interface FeatureImageCardProps {
    frontImage: StaticImageData | string
    alt?: string
}

export function FeatureImageCard({ frontImage, alt = "Feature Card" }: FeatureImageCardProps) {
    return (
        <div className="relative flex items-center w-full mx-auto mt-auto pt-10">
            {/* Back image — background pattern */}
            <div className="w-full relative z-0">
                <Image src={backgroundImage} alt="Background" className="w-full" />
            </div>

            {/* Front image — centered on top */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-[10%]">
                <Image src={frontImage} alt={alt} className="w-[100%] rounded-[1.5rem] shadow-xl" />
            </div>
        </div>
    )
}
