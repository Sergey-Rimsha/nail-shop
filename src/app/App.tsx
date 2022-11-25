import React, { ReactElement } from 'react';

import { Main } from '../pages/p0-main/Main';
import { Header } from '../pages/p1-header/Header';
import { Arrivals } from '../pages/p2-arrivals/Arrivals';
import { Catalog } from '../pages/p3-catalog/Catalog';
import { NailNumbers } from '../pages/p4-nailNumbers/NailNumbers';

import s from './App.module.scss';

export const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Header />
        <Main />
        <Arrivals />
        <Catalog />
        <NailNumbers />
      </div>
    </div>
  );
};
