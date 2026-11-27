'use client';

import { useEffect } from 'react';

export default function MotionReveal() {
  useEffect(() => {
    let active = true;
    let revertAnimations: (() => void) | undefined;

    const initialize = async () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: { trigger: element, start: 'top 88%', once: true },
            },
          );
        });
      });
      revertAnimations = () => media.revert();
    };

    const requestIdle = window.setTimeout(() => void initialize(), 160);
    return () => {
      active = false;
      window.clearTimeout(requestIdle);
      revertAnimations?.();
    };
  }, []);

  return null;
}
