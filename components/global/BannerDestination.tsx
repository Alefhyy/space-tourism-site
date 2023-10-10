"use client"
import { IDestination } from "@/types";
// import { useNextSanityImage } from "next-sanity-image";
// import Image from "next/image";
// import sanityClient from "@/sanityClientConfig";
import { Tab } from '@headlessui/react'

const BannerDestination = ({
    number,
    title,
    tabs,
    cards,
}: IDestination) => {
    // const { src, width, height } = useNextSanityImage(sanityClient, imageSrc);
    return (
        <div>
            <h2 className="text-white">
                <span className="opacity-25">{number}</span>
                {title}
            </h2>
            <Tab.Group>
                <Tab.List>
                    {/* {tabs.map(({
                        _key,
                        link
                    }) => {
                        return (
                            <Tab key={_key}>{link}</Tab>
                        );
                    })} */}
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                    <Tab>Tab 4</Tab>
                </Tab.List>
                <Tab.Panels>
                    {cards.map(({
                        averageDistanceTitle,
                        averageDistanceNumber,
                        cardText,
                        cardTitle,
                        estimatedTimeTitle,
                        estimatedTimeNumber, }) => {
                        return (
                            <Tab.Panel>
                                <h1>{cardTitle}</h1>
                                <p>{cardText}</p>
                                <div>
                                    <span>{averageDistanceTitle}</span>
                                    <span>{averageDistanceNumber}</span>
                                </div>
                                <div>
                                    <span>{estimatedTimeTitle}</span>
                                    <span>{estimatedTimeNumber}</span>
                                </div>
                            </Tab.Panel>
                        );
                    })}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default BannerDestination;











{/* {cards.map(({
    _key,
    // imageSrc,
    // imageAlt,
    cardTitle, 
    cardText,
    averageDistanceTitle,
    averageDistanceNumber,
    estimatedTimeTitle,
    estimatedTimeNumber, }) => {
    return (
        <div>
            <Image src={src} alt={imageAlt ? imageAlt : "Planeta"} width={width} height={height}/>
            <Tab.Group key={_key}>
                <Tab.List className="uppercase">
                    <Tab>{cardTitle}</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <h1>{cardTitle}</h1>
                        <p>{cardText}</p>
                        <div>
                            <span>{averageDistanceTitle}</span>
                            <span>{averageDistanceNumber}</span>
                        </div>
                        <div>
                            <span>{estimatedTimeTitle}</span>
                            <span>{estimatedTimeNumber}</span>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
})} */}