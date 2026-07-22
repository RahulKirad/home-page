import { useEffect, useState } from 'react';

export const DESIGN_WIDTH = 1440;
export const DESIGN_HEADER_HEIGHT = 175;

export function getPageScale(viewportWidth = window.innerWidth) {
  if (viewportWidth >= DESIGN_WIDTH) return 1;
  return viewportWidth / DESIGN_WIDTH;
}

export function usePageScale() {
  const [scale, setScale] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : DESIGN_WIDTH,
  );

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const nextScale = getPageScale(width);

      setViewportWidth(width);
      setScale(nextScale);

      document.documentElement.style.setProperty('--page-scale', String(nextScale));
      document.documentElement.style.setProperty(
        '--scaled-header-height',
        `${DESIGN_HEADER_HEIGHT * nextScale}px`,
      );
      document.documentElement.style.setProperty(
        '--viewport-width',
        `${width}px`,
      );
    };

    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      document.documentElement.style.removeProperty('--page-scale');
      document.documentElement.style.removeProperty('--scaled-header-height');
      document.documentElement.style.removeProperty('--viewport-width');
    };
  }, []);

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < DESIGN_WIDTH;
  const isDesktop = viewportWidth >= DESIGN_WIDTH;

  return { scale, viewportWidth, isMobile, isTablet, isDesktop };
}
