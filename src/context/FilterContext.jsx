import React, { createContext, useState } from "react";

const FilterContext = createContext({});
const FilterContextProvider = (props) => {
const [filter, setFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  );
};
export { FilterContextProvider, FilterContext };
