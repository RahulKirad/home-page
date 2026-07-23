export const BANNER_TOP = 175;
export const BANNER_HEIGHT = 580;
export const STATS_BAR_HEIGHT = 47;
export const BANNER_SCROLL_VIEWS = 2.5;

export const BANNER_BOTTOM = BANNER_TOP + BANNER_HEIGHT;
export const STATS_BAR_TOP = BANNER_BOTTOM;
export const HERO_BOTTOM = BANNER_BOTTOM + STATS_BAR_HEIGHT;
export const GOLD_CARDS_TOP = HERO_BOTTOM + 32;
export const STATS_TEXT_TOP = BANNER_BOTTOM + 12;
export const CAROUSEL_ARROW_TOP = BANNER_TOP + Math.round(BANNER_HEIGHT * 0.42);

export function getBannerScrollDistance() {
  return window.innerHeight * BANNER_SCROLL_VIEWS;
}
