import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const d = new Date();
d.setDate(d.getDate() + 3);

const INITIAL_STATE = {
  city: undefined,
  
  dates: [
    {
      startDate: new Date(),
      endDate: d,
    },
  ],
  options: {
    adult: undefined,
    children: undefined,
    room: 3,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
SearchContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };