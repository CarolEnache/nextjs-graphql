import styled from 'styled-components';
import { colors, fontSizes, spacing } from '../../styles/globals';

export const StyledFooter = styled.footer`
  font-size: ${fontSizes.s1};
  font-weight: 100;
  color: ${colors.purpleHaze};
  background: ${colors.hemocyanin};
  width: 100%;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  padding: ${spacing.s4} 0;

  p {
    margin: 0;
    padding: 0 ${spacing.s4};
  }
`;
