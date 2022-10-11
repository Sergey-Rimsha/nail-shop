import { ReactElement } from 'react';

import arrow from '../../assets/img/arrow.svg';
import logo from '../../assets/img/logo.png';
import shopping from '../../assets/img/shopping-icon.svg';

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
      <nav className={s.nav}>
        <div className={s.nav__item}>Лампы</div>
        <div className={`${s.nav__item} ${s.nav__item_active}`}>Фрезы</div>
        <div className={s.nav__item}>Дизайн</div>
        <div className={s.nav__item}>...</div>
      </nav>
      <div className={s.phone}>
        <div className={s.phone__title}>+375 (44) 750-21-50</div>
        <div className={s.phone__wrapBtn}>
          <button type="button">Заказать звонок</button>
        </div>
      </div>
      <div className={s.shopping}>
        <div className={s.shopping__icon}>
          <img width="35px" height="36px" src={shopping} alt="shopping" />
        </div>
        <div className={s.shopping__sum}>180 руб</div>
        <img width="7px" height="4px" src={arrow} alt="arrow" />
      </div>
    </header>
  );
};
