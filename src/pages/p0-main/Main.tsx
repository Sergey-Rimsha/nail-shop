import { ReactElement } from 'react';

import s from './Main.module.scss';

export const Main = (): ReactElement => {
  return (
    <div className={s.main}>
      <div>
        <h1>Скидка 30% на все товары бренда Ru Nail</h1>
        <div>
          Только до конца этого года, при заказе через интернет- магазин, для Вас
          действует скидка 30% на все товары бренда Ru Nail!
        </div>
        <div>
          <button type="button">Смотреть каталог</button>
        </div>
      </div>
      <div>img</div>
    </div>
  );
};
