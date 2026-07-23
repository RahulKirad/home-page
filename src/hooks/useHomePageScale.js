import { useEffect } from 'react';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 8895;

export function useHomePageScale(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const root = canvas.closest('.home-page-root');

    const update = () => {
      const width = window.innerWidth;

      if (width >= DESIGN_WIDTH) {
        canvas.style.transform = '';
        canvas.style.width = '';
        if (root) root.style.minHeight = '';
        return;
      }

      if (width >= 1024) {
        const scale = width / DESIGN_WIDTH;
        canvas.style.transform = `scale(${scale})`;
        canvas.style.transformOrigin = 'top center';
        canvas.style.width = `${DESIGN_WIDTH}px`;
        if (root) {
          root.style.minHeight = `${Math.ceil(DESIGN_HEIGHT * scale + 720)}px`;
        }
        return;
      }

      canvas.style.transform = '';
      canvas.style.width = '';
      if (root) root.style.minHeight = '';
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [canvasRef]);
}
