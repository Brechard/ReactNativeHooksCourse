// This file has a lowercase c in the name because by convention, when we export 
// a plane function from this file
// File used to automate the creation of a Context

import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();


    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        // actions === { functionName: (dispatch) => { return () => {} } }
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    } 

    return { Context, Provider };
}
