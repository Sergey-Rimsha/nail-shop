import { ReactElement } from 'react';

import sun5 from '../../assets/img/item_Sun5.png';
import { Card } from '../../components/c0-card/Card';

import s from './Catalog.module.scss';

export const Catalog = (): ReactElement => {
  const description = [
    { name: 'Мощность аппарата:', value: '48 Вт' },
    { name: 'Кол-ва светодиодов:', value: '24 шт' },
    { name: 'Таймер:', value: '10/30/60 сек' },
  ];

  return (
    <section className={s.catalog}>
      <div className={s.catalog__title}>
        <h2>Каталог товаров</h2>
      </div>
      <div className={s.catalog__content}>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
        <div className={s.catalog__item}>
          <Card srcImg={sun5} description={description} />
        </div>
      </div>
    </section>
  );
};
