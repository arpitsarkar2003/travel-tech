import React, { createContext, useContext, useReducer } from "react";
// import { cartReducer, initialState } from './reducer.js';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, childern }) => {   
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {childern}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);
    
