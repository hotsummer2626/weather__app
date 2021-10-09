const breakpoint = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const MQ = (key) => (style) =>
  `@media (max-width: ${breakpoint[key]}px) { ${style} }`;
