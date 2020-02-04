import React from 'react';
import Navbar from './nav/Navbar';
import Footer from '../sections/Footer';
import { createGlobalStyle } from 'styled-components';
import Favicon from 'react-favicon';
import Logo from '../../../m-robinson-web-developer-logo.png';
const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: 10px;
	font-family: 'montserrat', sans-serif;
}
`;

export default function Layout({ children }) {
	return (
		<>
			<GlobalStyle />
			<Favicon url={Logo} />
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
