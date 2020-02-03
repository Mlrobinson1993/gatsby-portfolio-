import React from 'react';
import '../App.css';
import { Router } from '@reach/router';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Home from './Home';
import About from './About';
import Services from './services/index.js';
import Blog from './Blog';
import SEOPage from './services/search-engine-optimisation';
import SMM from './services/social-media-marketing';
import Branding from './services/branding-and-strategy';
import Web from './services/web-design-and-development';
import Contact from './Contact';

import SEO from 'react-seo-component';

function App() {
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
				description={description || `nothin’`}
				image={`${siteUrl}${image}`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
			/>
			<div
				className='App'
				style={{
					background: 'white',
					overflow: 'hidden',
				}}
			>
				<Router>
					<Home path='/' />

					<About path='/About/' />
					<Services path='/Services/' />

					<Blog path='/Blog/' />

					<Contact path='/Contact/' />

					<SEOPage path='/services/search-engine-optimisation' />
					<SMM path='/services/social-media-marketing' />
					<Branding path='/services/branding-and-strategy' />
					<Web path='/services/web-design-and-development' />
				</Router>
			</div>
		</>
	);
}

export default App;
