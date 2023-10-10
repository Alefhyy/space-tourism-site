"use client"
import { Tab } from '@headlessui/react'
import sanityClient from "@/sanityClientConfig";
import BannerDestination from "@/components/global/BannerDestination"


const getData = async () => {
    const data = await sanityClient.fetch(
        `*[_type == 'destination'][0]{
            spanNumber,
            titleHero, 
            navigationTabs,
            planetsCards
    }`,
        { next: { revalidate: 10 } }
    );

    return data;
};


export default async function Destination() {
    const { planetsCards, spanNumber, navigationTabs, titleHero } = await getData();

    return (
        <section>
            <BannerDestination number={spanNumber} title={titleHero} tabs={navigationTabs} cards={planetsCards}/>
        </section>
    );
}