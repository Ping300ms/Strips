import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [mainColor, setMainColor] = useState('#313131');

  return (
    <AppContext.Provider value={{
      mainColor, setMainColor,
    }}>
      {children}
    </AppContext.Provider>
  );
};
