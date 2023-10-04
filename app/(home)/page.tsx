import sanityClient from "@/sanityClientConfig";
import BannerHome from "@/components/global/BannerHome"

const getData = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'homepage'][0]{
      backGroundHero,
      alt,
      backGroundHeroLg,
      backGroundImageAltLg,
      subtitle,
      titleHero,
      text,
      button,
  }`,
    { next: { revalidate: 10 } }
  );

  return data;
};

export default async function Home() {
  const { backGroundHero, backGroundHeroLg, subtitle, titleHero, text, button, } = await getData();

  return (
    <main>
      <BannerHome
      backGroundImageSrc={backGroundHero.asset._ref}
      backGroundImageAlt={backGroundHero.alt}
      subTitle={subtitle}
      title={titleHero}
      text={text}
      ctaTitle={button.buttonTitle}
      ctaHref={button.buttonLink}
      />
    </main>
  )
}