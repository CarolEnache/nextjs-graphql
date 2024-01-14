import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --hemocyanin: #180048;
    --ice: #f0ffff;
    --plum: #600e6b;
    --purpleHaze: #a49fc8;
    --siphon: #100030;
    --sohoLights: #f050f8;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Gotham, helvetica, arial, sans-serif;
    color: var(--ice);
    background: var(--siphon);
  }
`;

export const colors = {
  hemocyanin: '#180048',
  ice: '#f0ffff',
  plum: '#600e6b',
  purpleHaze: ' #a49fc8',
  siphon: '#100030',
  sohoLights: ' #f050f8',
} as const;

export const viewportWidths = {
  mobile: '375px',
  tablet: '774px',
  largeTablet: '1024px',
  desktop: '1440px',
};

export const spacing = {
  none: '0',
  s1: '4px',
  s2: '8px',
  s3: '12px',
  s4: '16px',
  s5: '20px',
  s6: '24px',
  s7: '28px',
  s8: '32px',
  s9: '36px',
  s10: '40px',
  s11: '44px',
  s12: '48px',
  s13: '52px',
  s14: '56px',
  s15: '60px',
  s16: '64px',
  s17: '68px',
  l1: '72px',
  l2: '80px',
  l3: '96px',
  l4: '120px',
  l5: '156px',
  l6: '204px',
  l7: '260px',
} as const;

export const fontSizes = {
  s1: '12px',
  s2: '14px',
  s3: '16px',
  s4: '18px',
  s5: '20px',
  s6: '24px',
  s7: '32px',
  s8: '40px',
  s9: '48px',
  s10: '64px',
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const gridMaxWidth = '1440px';
export const Container = styled.div`
  margin: 0 auto;
  padding: ${spacing.s4} ${spacing.s4} 0 ${spacing.s4};
  max-width: ${gridMaxWidth};
`;

export const device = Object.fromEntries(
  Object.entries(viewportWidths).map(([k, v]) => [k, `(min-width: ${v})`])
) as typeof viewportWidths;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;
