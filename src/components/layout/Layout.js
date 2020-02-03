import React from 'react';
import Navbar from './nav/Navbar';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Footer from '../sections/Footer';
import { createGlobalStyle } from 'styled-components';

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
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
