import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@/sanityClientConfig";
import Link from "next/link";

interface IHome {
    backGroundImageSrc: string;
    backGroundImageAlt: string;
    subTitle: string;
    title: string;
    text: any[];
    ctaTitle: boolean;
    ctaHref: string;
}

const BannerHome = ({
    backGroundImageSrc,
    backGroundImageAlt,
    subTitle,
    title,
    text,
    ctaTitle,
    ctaHref,
}: IHome) => {
    const { src, width, height } = useNextSanityImage(sanityClient, backGroundImageSrc);
    return (
        <div className="flex justify-center">
            <Image
                src={src}
                width={width}
                height={height}
                alt={backGroundImageAlt ? backGroundImageAlt : "imagem"}
                className="relative w-full h-screen object-cover"
            />
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center text-center lg:text-start w-full absolute top-28 md:top-32 lg:top-[145px] xl:top-60 2xl:top-[25.5rem] container">
                <div className="flex flex-col gap-2 mb-12 md:mb-40 items-center lg:items-start lg:mb-0 text-light-blue">
                    <span className="uppercase text-[16px] md:text-[20px] lg:text-[28px] text-lg tracking-[2.7px]">{subTitle}</span>
                    <h1 className="text-white uppercase text-[80px] md:text-[150px]">{title}</h1>
                    <p className="max-w-[327px] md:max-w-[444px] leading-8 text-[15px] md:text-[16px] xl:text-[18px]">
                        {text}
                    </p>
                </div>
                <button className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[262px] lg:h-[262px] xl:w-[274px] xl:h-[274px] md:text-[32px] lg:text-[34px] xl:text-[36px] self-center lg:self-end bg-white text-dark-blue rounded-full uppercase text-2xl">
                    <Link href={ctaHref}>
                        {ctaTitle}
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default BannerHome;