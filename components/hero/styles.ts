import styled from 'styled-components';
import { ProductImageProps, QuantityButtonProps } from './types';
import { colors, fontSizes, spacing } from '../../styles/globals';

const imageWIth = 350;
const imageHeight = 418;

export const ProductImageWrapper = styled.div`
  height: ${imageHeight}px;
  width: ${imageWIth}px;
  border-radius: 5%;
  align-self: center;
  overflow: hidden;
`;

export const ProductImage = styled.div<ProductImageProps>`
  height: 100%;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5%;
`;

export const ProductName = styled.h1`
  font-size: ${fontSizes.s7};
  font-weight: 400;
  line-height: ${fontSizes.s8};
`;

export const ProductPowerAndSize = styled.div`
  color: ${colors.purpleHaze};
`;

export const QuantityButton = styled.button<QuantityButtonProps>`
  background: ${(props) =>
    props.decrement && props.minimumQuantity ? colors.plum : colors.sohoLights};
  border: none;
  border-radius: 30%;
  width: ${spacing.s7};
  height: ${spacing.s7};
`;

export const QuantityCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: ${spacing.s4} 0;
`;

export const PriceTag = styled.p`
  font-size: ${fontSizes.s6};
  margin: 0;
`;

export const QuantityCounter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Qty = styled.p`
  margin: 0;
  text-align: center;
  font-size: ${fontSizes.s1};
  font-weight: 100;
`;

export const QuantityButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.span`
  padding: 0 0.5rem;
  margin: 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: ${spacing.s4};
  border: none;
  border-radius: 10px;
  background: ${colors.sohoLights};
  color: ${colors.hemocyanin};
  font-size: ${fontSizes.s3};
`;

export const HeroWrapper = styled.div`
  padding-bottom: ${spacing.s8};
  display: flex;
  flex-direction: column;
`;
