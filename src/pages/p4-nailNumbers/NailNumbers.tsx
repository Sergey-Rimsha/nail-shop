import { ReactElement } from 'react';

import s from './NailNumbers.module.scss';

export const NailNumbers = (): ReactElement => {
  return (
    <section className={s.nailNumbers}>
      <div className={s.nailNumbers__title}>
        <h2>Nail Shop в цифрах</h2>
      </div>
      <div className={s.nailNumbers__wrapItems}>
        <div className={s.item}>
          <div className={s.item__title}>10</div>
          <div className={s.item__description}>
            Минут максимальное время обработки заказа
          </div>
        </div>
      </div>
    </section>
  );
};
