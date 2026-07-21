const frameModules = import.meta.glob('./banner-frames/ezgif-frame-*.png', {
  eager: true,
  import: 'default',
});

export const bannerFrames = Object.entries(frameModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

export const BANNER_FRAME_COUNT = bannerFrames.length;
