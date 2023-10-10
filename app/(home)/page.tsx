"use client"
import sanityClient from "@/sanityClientConfig";
import BannerHome from "@/components/global/BannerHome"

const getData = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'homepage'][0]{
      backGroundHero,
      backGroundHeroLg,
      backGroundImageAltLg,
      subtitle,
      titleHero,
      text,
      button,
  }`,
    { next: { revalidate: 0 } }
  );

  return data;
};

export default async function Home() {
  const { backGroundHero, backGroundHeroLg, subtitle, titleHero, text, button, } = await getData();

  return (
    <section>
      <BannerHome
      backGroundImageSrc={backGroundHeroLg.asset._ref}
      backGroundImageAlt={backGroundHeroLg.alt}
      subTitle={subtitle}
      title={titleHero}
      text={text}
      ctaTitle={button.buttonTitle}
      ctaHref={button.buttonLink}
      />
    </section>
  )
}