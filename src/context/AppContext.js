import { createContext, useContext, useState } from "react";
import { studioData } from "../data/studioData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] =
    useState(studioData.categories[0]);

  return (
    <AppContext.Provider
      value={{
        studioData,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);