import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Container } from '../components/Container';
import { NavigationMenu } from '../components/NavigationMenu';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';

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
        <AboutUs />
      </main>
    </>
  );
};

export default Home;
