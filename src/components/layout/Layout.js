import React from 'react';
import Navbar from './nav/Navbar';
import useSiteMetadata from '../../hooks/useSiteMetadata'
import Footer from '../sections/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer/>
		</>
	);
}
