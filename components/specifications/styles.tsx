import styled from 'styled-components';
import { fontSizes, spacing } from '../../styles/globals';

export const SpecificationsHeading = styled.h2`
  font-weight: 500;
  margin: 0;
  font-size: ${fontSizes.s5};
  padding: ${spacing.s4} 0;
`;

export const SpecificationKey = styled.p`
  width: 50%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  font-weight: 100;
`;
