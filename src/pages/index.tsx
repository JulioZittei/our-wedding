import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Container } from '../components/Container';
import { NavigationMenu } from '../components/NavigationMenu';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { CountDown } from '../components/CountDown';
import { SaveTheDate } from '../components/SaveTheDate';

const Home: NextPage = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo />
        </Container>
        <NavigationMenu />
      </Header>
      <main>
        <Hero />
        <CountDown />
        <AboutUs />
        <SaveTheDate />
      </main>
    </>
  );
};

export default Home;
