import Logo from '../../public/octopus-logo.svg';
import Basket from '../../public/basket.svg';

import { HeaderWRapper, LogoWrapper, BasketWrapper } from './styles';
import { HeaderProps } from './types';

export const Header = ({basketQuantity}: HeaderProps) => {
  return (
    <HeaderWRapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BasketWrapper>
        <Basket />{basketQuantity > 0 && <span>{basketQuantity}</span>}
      </BasketWrapper>
    </HeaderWRapper>
  )
}