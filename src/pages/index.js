import React from 'react';

import { Router } from '@reach/router';
import Home from './Home';
import About from './about/index';
import Services from './services/index.js';
import Blog from './blog/index';
import SEOPage from './services/search-engine-optimisation';
import SMM from './services/social-media-marketing';
import Branding from './services/branding-and-strategy';
import Web from './services/web-design-and-development';
import Contact from './contact/index';
import Err from './404/index';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
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
				titleTemplate='Business Growth Specialists'
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

					<About path='/about/' />
					<Services path='/services/' />

					<Blog path='/blog/' />

					<Contact path='/contact/' />
					<Err path='/404' />
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
