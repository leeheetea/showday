import React, { createContext, useState, useContext } from "react";

const RankingTypeContext = createContext();

export const useRankingType = () => {
  return useContext(RankingTypeContext);
};

export const RankingTypeProvider = ({ children }) => {
  const [rankingType, setRankingType] = useState("musical");

  return (
    <RankingTypeContext.Provider value={{ rankingType, setRankingType }}>
      {children}
    </RankingTypeContext.Provider>
  );
};
