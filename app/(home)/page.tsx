import sanityClient from "@/sanityClientConfig";
import BannerHome from "@/components/global/BannerHome"

const getData = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'homepage'][0]{
      backgroundHero,
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
  const { backgroundHero, subtitle, titleHero, text, button, } = await getData();

  return (
    <main className="bg-dark-blue h-screen w-full">
      <BannerHome
      backGroundImageSrc={backgroundHero.asset._ref}
      backGroundImageAlt={backgroundHero.alt}
      subTitle={subtitle}
      title={titleHero}
      text={text}
      ctaTitle={button.buttonTitle}
      ctaHref={button.buttonLink}
      />
    </main>
  )
}