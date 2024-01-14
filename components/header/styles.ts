import { styled } from 'styled-components';
import { spacing } from '../../styles/globals';

export const HeaderWRapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${spacing.s6};
  padding-bottom: ${spacing.s4};
`;

const logoWidth = 163;
export const LogoWrapper = styled.div`
  width: ${logoWidth}px;
  height: ${spacing.s6};
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
