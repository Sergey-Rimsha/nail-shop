import { ReactElement, useState } from 'react';

import s from './NailNumbers.module.scss';

const state = [
  { id: 1, title: 10, descriptions: 'Минут максимальное время обработки заказа' },
  { id: 2, title: 24, descriptions: 'Часа максимальное время доставки по РБ' },
  { id: 3, title: 50, descriptions: 'Международных брендов в каталоге' },
  { id: 4, title: 3117, descriptions: 'Цветов в палитре гель-лаков' },
];

export const NailNumbers = (): ReactElement => {
  const [items] = useState(state);

  return (
    <section className={s.nailNumbers}>
      <div className={s.nailNumbers__title}>
        <h2>Nail Shop в цифрах</h2>
      </div>
      <div className={s.nailNumbers__wrapItems}>
        {items.map(el => {
          return (
            <div key={el.id} className={s.item}>
              <div className={s.item__title}>{el.title}</div>
              <div className={s.item__description}>{el.descriptions}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
