import React, { ReactElement } from 'react';

import { Main } from '../pages/p0-main/Main';
import { Header } from '../pages/p1-header/Header';
import { Arrivals } from '../pages/p2-arrivals/Arrivals';

import s from './App.module.scss';

export const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Header />
        <Main />
        <Arrivals />
      </div>
    </div>
  );
};
