import React, { createContext, useContext } from 'react';
const Context = createContext();

export function ColorProvider({ children, ...props }) {
	return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useColortContext() {
	const context = useContext(Context);
	return context;
}
