import { memo, ReactElement } from 'react';

import s from './Card.module.scss';

type DescriptionItemType = {
  name: string;
  value: string;
};

type PropsType = {
  srcImg: string;
  description: DescriptionItemType[];
};

export const Card = memo((props: PropsType): ReactElement => {
  const { srcImg, description } = props;

  return (
    <div className={s.card}>
      <div className={s.card__title}>Sun 5, 48W</div>
      <div className={s.card__img}>
        <img width="180px" height="194px" src={srcImg} alt="cardImg" />
      </div>
      <div className={`${s.card__description} ${s.description}`}>
        {description.map((el, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={s.description__item}>
              <span>{el.name}</span>
              <span>{el.value}</span>
            </div>
          );
        })}
      </div>
      <div className={s.card__sum}>65 руб.</div>
    </div>
  );
});
