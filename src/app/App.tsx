import React, { ReactElement } from 'react';

import s from './App.module.scss';

export const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <div className={s.container}>d</div>
    </div>
  );
};
