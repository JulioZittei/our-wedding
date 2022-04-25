import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { CountDown } from '../components/CountDown';
import { SaveTheDate } from '../components/SaveTheDate';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <CountDown />
        <SaveTheDate />
      </main>
    </>
  );
};

export default Home;
