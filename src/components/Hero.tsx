import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

export function Hero() {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <AspectRatio.Root ratio={16 / 9}>
        <Image
          src="/images/noivos-hero.jpeg"
          layout="intrinsic"
          alt=""
          width={1920}
          height={700}
          objectFit="cover"
          style={{
            filter: 'blur(4px)',
            zIndex: 800,
          }}
        />
      </AspectRatio.Root>
    </div>
  );
}
