import styled from 'styled-components';
import { colors, fontSizes, spacing } from '../../styles/globals';

export const DescriptionHeading = styled.h2`
  font-weight: 500;
  margin: 0;
  font-size: ${fontSizes.s4};
  padding: ${spacing.s4};
`;

export const DescriptionText = styled.p`
  font-weight: 100;
  line-height: 30px;
  word-spacing: -2px;
  margin: 0;
  padding: ${spacing.s4};
`;

export const DescriptionWrapper = styled.div`
  background: ${colors.hemocyanin};
  width: 100%;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
`;
