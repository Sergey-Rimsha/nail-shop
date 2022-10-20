import { ReactElement } from 'react';

import sun5 from '../../assets/img/item_Sun5.png';
import kodi2021 from '../../assets/img/kodi_2021.png';
import nextBtn from '../../assets/img/next_btn.svg';
import prevBtn from '../../assets/img/prev_btn.svg';
import startedPack from '../../assets/img/started_pack.png';
import { Card } from '../../components/c0-card/Card';

import s from './Arrivals.module.scss';

export const Arrivals = (): ReactElement => {
  const description = [
    { name: 'Мощность аппарата:', value: '48 Вт' },
    { name: 'Кол-ва светодиодов:', value: '24 шт' },
    { name: 'Таймер:', value: '10/30/60 сек' },
  ];

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
        <div className={s.slider__content}>
          <button className={s.slider__btn} type="button">
            <img src={prevBtn} alt="prev" />
          </button>
          <div className={s.slider__wrapItem}>
            <div className={s.slider__item}>
              <Card srcImg={sun5} description={description} />
            </div>
            <div className={s.slider__item}>
              <Card srcImg={sun5} description={description} />
            </div>
            <div className={s.slider__item}>
              <Card srcImg={sun5} description={description} />
            </div>
            <div className={s.slider__item}>
              <Card srcImg={sun5} description={description} />
            </div>
          </div>
          <button className={s.slider__btn} type="button">
            <img src={nextBtn} alt="next" />
          </button>
        </div>
        <div className={s.slider__input}>
          <input type="range" min="0" max="100" />
        </div>
      </div>
      <div className={`${s.arrivals__sales} ${s.sales}`}>
        <div className={s.sales__item}>
          <div className={s.sales__img}>
            <img width="570px" height="497px" src={kodi2021} alt="kodi2021" />
          </div>
          <div className={`${s.sales__content} ${s.content}`}>
            <div className={s.content__title}>Встречай весну с Kodi</div>
            <div className={s.content__wrap}>
              <div className={s.content__description}>
                Новая яркая палитра цветов от Kodi Весна 2021
              </div>
              <div className={s.content__btn}>
                <button type="button">Смотреть каталог</button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.sales__item}>
          <div className={s.sales__img}>
            <img width="570px" height="497px" src={startedPack} alt="startedPack" />
          </div>
          <div className={`${s.sales__content} ${s.content}`}>
            <div className={s.content__title}>Начать свое дело- легко!</div>
            <div className={s.content__description}>
              Выбирай свой стартовый набор для маникюра
            </div>
            <div className={s.content__btn}>
              <button type="button">Выбрать стартовый набор</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
