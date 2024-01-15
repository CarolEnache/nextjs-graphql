import { HeaderWRapper, BasketWrapper } from './styles';
import { HeaderProps } from './types';

export const Header = ({ basketQuantity }: HeaderProps) => {
  return (
    <HeaderWRapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/octopus-logo.svg' alt='octopus-logo' width={165} />
      <BasketWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/basket.svg' alt='basket' width={28} />{' '}
        {basketQuantity > 0 && (
          <span title='Basket items'>{basketQuantity}</span>
        )}
      </BasketWrapper>
    </HeaderWRapper>
  );
};
