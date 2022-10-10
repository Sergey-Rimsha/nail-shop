import { ReactElement } from 'react';

import logo from '../../assets/img/logo.png';

import s from './Header.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo" width="60px" height="55px" />
        <div>
          <div className={s.title}>Nail Shop</div>
          <div className={s.subtitle}>Магазин товаров для маникюра</div>
        </div>
      </div>
    </header>
  );
};
