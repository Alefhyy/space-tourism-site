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
        <section>
            <Image
                src={src}
                width={width}
                height={height}
                alt={backGroundImageAlt ? backGroundImageAlt : "imagem"}
                className="relative h-screen w-full"
            />
            <div className="flex justify-between items-center px-40 w-full absolute bottom-20">
                <div>
                    <span className="text-light-blue uppercase text-[28px]">{subTitle}</span>
                    <h1 className="text-white uppercase text-[150px]">{title}</h1>
                    <p className="text-light-blue max-w-md leading-8 ">
                        {text}
                    </p>
                </div>
                <button className="lg:w-[274px] lg:h-[274px] w-[242px] h-[242px] bg-white text-dark-blue rounded-full uppercase text-4xl ">
                    <Link href={ctaHref}>
                        {ctaTitle}
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default BannerHome;