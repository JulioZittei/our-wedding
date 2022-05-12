import type { GetStaticPropsContext, NextApiRequest, NextApiResponse } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { CountDown } from '../components/CountDown';
import { SaveTheDate } from '../components/SaveTheDate';
import { Location } from '../components/Location';
import { Gifts } from '../components/Gifts';
import { Footer } from '../components/Footer';
import { Player } from '../components/Player';

interface HomeProps {
  pixCode: string;
}

export default function Home({ pixCode }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>❤️ Élen & Julio ❤️ </title>
      </Head>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <CountDown />
        <SaveTheDate />
        <Location />
        <Gifts pixCode={pixCode} />
      </main>
      <Footer />
      <Player />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext, req: NextApiRequest, res: NextApiResponse) {
  const pixCode = process.env.PIX_CODE;

  return {
    props: {
      pixCode: pixCode,
    },
  };
}
