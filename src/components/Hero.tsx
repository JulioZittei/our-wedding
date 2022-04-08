import Image from 'next/image';
import * as HeroCss from '../styles/components/HeroCss';
import { styled } from '../styles/stiches.config';

const HeroRoot = styled('section', HeroCss.Hero);
const HeroImage = styled(Image, HeroCss.HeroImage);
const HeroContent = styled('div', HeroCss.HeroContent);
const HeroHeader = styled('div', HeroCss.HeroHeader);
const HeroTitle = styled('h1', HeroCss.HeroTitle);
const HeroSubTitle = styled('h2', HeroCss.HeroSubTitle);

export function Hero() {
  return (
    <HeroRoot>
      <HeroImage
        src="/images/noivos-hero.jpeg"
        layout="intrinsic"
        width={6000}
        height={2800}
        objectFit="cover"
        alt=""
      />
      <HeroContent>
        <HeroHeader>
          <HeroTitle>Élen & Julio</HeroTitle>
          <HeroSubTitle>
            <time dateTime="2022-11-26">26/11/2022</time>
          </HeroSubTitle>
        </HeroHeader>
      </HeroContent>
    </HeroRoot>
  );
}
