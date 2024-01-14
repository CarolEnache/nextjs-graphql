import { ItemWrapper, SpecificationKey, SpecificationsHeading } from './styles';
import { SpecificationsProps } from './types';

export const Specifications = ({ product }: SpecificationsProps) => (
  <>
    <SpecificationsHeading>Specifications</SpecificationsHeading>
    <ItemWrapper>
      <SpecificationKey>Brand</SpecificationKey>
      <p>{product?.brand}</p>
    </ItemWrapper>
    <ItemWrapper>
      <SpecificationKey>Item weight &#40;g&#x29;</SpecificationKey>
      <p>{product?.weight}</p>
    </ItemWrapper>
    <ItemWrapper>
      <SpecificationKey>Dimensions &#40;cm&#x29;</SpecificationKey>
      <p>
        {product?.height} x {product?.length} x {product?.length}
      </p>
    </ItemWrapper>
    <ItemWrapper>
      <SpecificationKey>Item Model number</SpecificationKey>
      <p>{product?.model_code}</p>
    </ItemWrapper>
    <ItemWrapper>
      <SpecificationKey>Colour</SpecificationKey>
      <p>{product?.colour}</p>
    </ItemWrapper>
  </>
);
