import { ReactElement } from 'react';

import dotBg from '../../assets/img/dot_bg.png';
import lamp from '../../assets/img/lamp.png';

import s from './Main.module.scss';

export const Main = (): ReactElement => {
  return (
    <section className={s.main}>
      <div className={s.main__block}>
        <h1 className={s.main__title}>Скидка 30% на все товары бренда Ru Nail</h1>
        <div className={s.main__description}>
          Только до конца этого года, при заказе через интернет- магазин, для Вас
          действует скидка 30% на все товары бренда Ru Nail!
        </div>
        <div className={s.main__wrapBtn}>
          <button type="button">Смотреть каталог</button>
        </div>
      </div>
      <div className={s.slider}>
        <div className={s.slider__block}>
          <div className={s.slider__imgWrap}>
            <img width="512px" height="367px" src={lamp} alt="lamp" />
          </div>
          <div className={s.slider__dotBg}>
            <img width="444px" height="299px" src={dotBg} alt="dot_bg" />
          </div>
          <div className={s.slider__description}>
            <h3 className={s.slider__title}>LED/UV лампа №3431</h3>
            <ul>
              <li>Мощность: 72 Вт</li>
              <li>Светодиоды: 24 шт</li>
              <li>Таймер: 10/30/60/99</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
