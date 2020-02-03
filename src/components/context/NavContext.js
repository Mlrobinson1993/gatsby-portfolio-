import React, { createContext, useState } from 'react';

const NavContext = createContext();

export default function NavProvider({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<NavContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</NavContext.Provider>
	);
}

export { NavProvider, NavContext };
