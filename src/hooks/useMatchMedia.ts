import { useEffect, useState } from 'react';

export default function useMatchMedia(condition: string): boolean {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    function listener({ matches }: MediaQueryListEvent) {
      setIsMatched(matches);
    }

    const matchMedia = window.matchMedia(`(${condition})`);

    setIsMatched(matchMedia.matches);

    try {
      matchMedia.addEventListener('change', listener);

      return () => matchMedia.removeEventListener('change', listener);
    } catch (_) {
      matchMedia.addListener(listener);

      return () => matchMedia.removeListener(listener);
    }
  }, [condition]);

  return isMatched;
}
