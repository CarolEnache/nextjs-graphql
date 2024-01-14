import {
  ProductImageWrapper,
  ProductImage,
  ProductName,
  ProductPowerAndSize,
  QuantityCounterWrapper,
  PriceTag,
  QuantityCounter,
  Qty,
  QuantityButtonsWrapper,
  QuantityButton,
  Quantity,
  Button,
  HeroWrapper,
} from './styles';
import { HeroProps } from './types';

export const Hero = ({
  product,
  currentQuantity,
  setCurrentQuantity,
  setBasketQuantity,
}: HeroProps) => {
  const minimumQuantity = currentQuantity === 1;

  return (
    <HeroWrapper>
      <ProductImageWrapper>
        <ProductImage src={product?.img_url} />
      </ProductImageWrapper>
      <ProductName>{product?.name}</ProductName>
      <ProductPowerAndSize>
        {product?.power} &#8725; &#8725; Packet of {product?.quantity}
      </ProductPowerAndSize>
      <QuantityCounterWrapper>
        <PriceTag>£{product?.price / 100}</PriceTag>
        <QuantityCounter>
          <Qty>Qty</Qty>
          <QuantityButtonsWrapper>
            <QuantityButton
              onClick={() =>
                !minimumQuantity && setCurrentQuantity(currentQuantity - 1)
              }
              minimumQuantity={minimumQuantity}
              decrement
            >
              -
            </QuantityButton>
            <Quantity title='Current quantity'>{currentQuantity}</Quantity>
            <QuantityButton
              onClick={() => setCurrentQuantity(currentQuantity + 1)}
            >
              +
            </QuantityButton>
          </QuantityButtonsWrapper>
        </QuantityCounter>
      </QuantityCounterWrapper>
      <Button onClick={() => setBasketQuantity(currentQuantity)}>
        Add to cart
      </Button>
    </HeroWrapper>
  );
};
