import { ReactElement } from 'react';

import sun5 from '../../assets/img/item_Sun5.png';
import nextBtn from '../../assets/img/next_btn.svg';
import prevBtn from '../../assets/img/prev_btn.svg';

import s from './Arrivals.module.scss';

export const Arrivals = (): ReactElement => {
  return (
    <section className={s.arrivals}>
      <div className={s.arrivals__header}>
        <div className={s.arrivals__title}>
          <h2>Новое поступление</h2>
        </div>
        <div className={`${s.arrivals__nav} ${s.nav}`}>
          <div className={`${s.nav__item} ${s.nav__item_active}`}>Всё</div>
          <div className={s.nav__item}>Лампы</div>
          <div className={s.nav__item}>Фрезы</div>
          <div className={s.nav__item}>Гель-лаки</div>
        </div>
      </div>
      <div className={`${s.arrivals__slider} ${s.slider}`}>
        <div className={s.slider__wrapItem}>
          <button className={s.slider__btn} type="button">
            <img src={prevBtn} alt="prev" />
          </button>
          <div className={`${s.slider__item} ${s.card}`}>
            <div className={s.card__title}>Sun 5, 48W</div>
            <div className={s.card__img}>
              <img width="180px" height="194px" src={sun5} alt="sun5" />
            </div>
            <div className={s.card__description}>
              Мощность аппарата: Кол-ва светодиодов: Таймер:
            </div>
            <div className={s.card__sum}>65 руб.</div>
          </div>
          <div className={`${s.slider__item} ${s.card}`}>
            <div className={s.card__title}>Sun 5, 48W</div>
            <div className={s.card__img}>
              <img width="180px" height="194px" src={sun5} alt="sun5" />
            </div>
            <div className={s.card__description}>
              Мощность аппарата: Кол-ва светодиодов: Таймер:
            </div>
            <div className={s.card__sum}>65 руб.</div>
          </div>

          <button className={s.slider__btn} type="button">
            <img src={nextBtn} alt="next" />
          </button>
        </div>
        <div className={s.slider__input}>
          <input type="range" min="0" max="100" />
        </div>
      </div>
    </section>
  );
};
