import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import WhyUs from '../components/sections/WhyUs';
import Reviews from '../components/sections/Reviews';
import Services from '../components/sections/Services';
// import PrevWork from '../components/sections/PrevWork';
import CTABanner from '../components/utilities/CTABanner';
import RecentPosts from '../components/sections/RecentPosts';

export default function Home() {
	return (
		<>
			<Layout>
				<div className='home'>
					<Hero />
					<WhyUs />
					<Services />
					{/* <PrevWork /> */}
					<Reviews />
					<CTABanner
						HeadingText='Get the results that you deserve'
						Subheading='I can help'
						CTAText='FIND OUT HOW'
						linkTo='/services/'
					/>
					<RecentPosts />
				</div>
			</Layout>
		</>
	);
}
