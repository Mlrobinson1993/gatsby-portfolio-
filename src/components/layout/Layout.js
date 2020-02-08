import React from 'react';
import Navbar from './nav/Navbar';
import Footer from '../sections/Footer';
import { createGlobalStyle } from 'styled-components';
import Favicon from 'react-favicon';
import Logo from '../../../m-robinson-web-developer-logo.png';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import SEO from 'react-seo-component';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: 10px;
	font-family: 'montserrat', sans-serif;
}

.leadin-message-wrapper {
	font-size: 1.6rem;
}
`;

export default function Layout({ children }) {
	const {
		title,
		description,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata();
	return (
		<>
			<SEO
				title={title}
				titleTemplate='Business Growth Specialists'
				description={description || `nothin’`}
				image={`${siteUrl}${image}`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
			/>
			;
			<GlobalStyle />
			<Favicon url={Logo} />
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
