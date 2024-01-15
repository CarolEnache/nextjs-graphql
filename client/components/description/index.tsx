import {
  DescriptionHeading,
  DescriptionText,
  DescriptionWrapper,
} from './styles';
import { DescriptionProps } from './types';

export const Description = ({ description }: DescriptionProps) => (
  <DescriptionWrapper>
    <DescriptionHeading>Description</DescriptionHeading>
    <DescriptionText>{description}</DescriptionText>
  </DescriptionWrapper>
);
