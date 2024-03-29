export const BREAKPOINTS = {
  mobile: 425,
  tablet: 768,
  smallTablet: 576,
  desktop: 991,
  sidebar: 1200
};

export const DEVICE = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  smallTablet: `(max-width: ${BREAKPOINTS.smallTablet}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(max-width: ${BREAKPOINTS.desktop}px)`,
  sidebar: `(max-width: ${BREAKPOINTS.sidebar}px)`
};
