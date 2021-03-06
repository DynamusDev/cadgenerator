import React, { createContext, useContext } from 'react';
const Context = createContext();

export function ContextProvider({ children, ...props }) {
	return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useTooltContext() {
	const context = useContext(Context);
	return context;
}
