import React, { createContext, useState } from 'react';
import MainRouter from './MainRouter';

export const GlobalContext = createContext();

const MainContexts = () => {
  const [data, setData] = useState([]);
  return (
    <GlobalContext.Provider value={[data, setData]}>
      <MainRouter />
    </GlobalContext.Provider>
  );
};

export default MainContexts;
