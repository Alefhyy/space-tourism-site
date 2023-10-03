import Header from '@/components/layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import sanityClient from "@/sanityClientConfig";

const barlow = Barlow ({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const getData = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'geral'][0]{
    navigation,
  }`,
    { next: { revalidate: 0 } }
  );

  return data;
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { navigation } = await getData();
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlow.className}`}>
        <Header navigationLinks={navigation} />
        {children}
      </body>
    </html>
  )
}