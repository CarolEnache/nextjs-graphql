import { NexusGenObjects } from "../../generated/nexus-typegen";

export type HeroProps = {
  product: NexusGenObjects['Product'];
  currentQuantity: number;
  setCurrentQuantity: (arg: number) => void;
  setBasketQuantity: (arg: number) => void;
};

export type QuantityButtonProps = {
  onClick: () => void;
  decrement?: boolean;
  minimumQuantity?: boolean;
}

export type ProductImageProps = {
  src: string;
};
