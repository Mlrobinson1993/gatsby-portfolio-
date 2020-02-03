import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';

import ServicesHero from '../../components/sections/ServicesHero';
import ServicesInfo from '../../components/sections/ServicesInfo';
import SEOSVG from '../../../posts/images/Search-engine-optimisation.svg';
import SEOSVG1 from '../../../posts/images/seo.svg';
import Accordion from '../../components/sections/FAQ';
import FAQSection from '../../components/sections/FAQSection';
import CTABanner from '../../components/utilities/CTABanner';
import PagesContact from '../../components/forms/PagesContact';

export default function Web() {
	useEffect(() => {
		return window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<ServicesHero>
				<TextContainer>
					<PageHeadings
						align='center'
						SmallText='search engine optimisation'
						BigText='Discover the power'
						LightText='of SEO'
						// lineBreak={true}
						bigTextColor='white'
						smallTextColor='white'
					/>
				</TextContainer>
			</ServicesHero>
			<ContentContainer>
				<ServicesInfo
					ImgSrc={SEOSVG}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Future-proof your business'
					Paragraph='SEO has become crucial for long-term business success. When executed effectively, search engine optimisation is the pinnacle of a businesses marketing strategy and can allow you to dominate your industry. Our team have developed tried and tested, data-driven methods to increase your bottom line'
					flexDirection='row'
				></ServicesInfo>
				<ServicesInfo
					ImgSrc={SEOSVG1}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Create leads whilst you sleep'
					Paragraph="70% of users click on the results on the first page of a search engine. We work on your SEO with one goal in mind, bringing qualified, targetted traffic to your website. People who are actively seeking your product or services. Whatever your industry, SEO experts will develop a custom strategy to increase your conversions and ensure that you're getting the return on investment that you expect."
					flexDirection='row-reverse'
				></ServicesInfo>
				<FAQSection>
					<Accordion
						heading='What is SEO?'
						para='Search engine optimisation is a system to help businesses drive free and organic traffic from the big search engines to their websites.'
					/>
					<Accordion
						heading='How can SEO help me?'
						para="It's simple, if your website ranks highly on google theres a higher chance of relevant traffic being driven to your website. More traffic = more leads."
					/>
					<Accordion
						heading='How does SEO work?'
						para='SEO is a long game, involving creating concrete foundations and building upon them using industry best practices and testing, lots of testing.'
					/>
				</FAQSection>
			</ContentContainer>
			<CTABanner
				HeadingText="Didn' t find an answer to your question?"
				Subheading="We'll show you how"
				CTAText='Talk to a specialist'
				linkTo='/contact/'
			/>
			<ContentContainer>
				<PagesContact />
			</ContentContainer>
		</Layout>
	);
}

const ContentContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;

const TextContainer = styled.div`
	width: 100%;
	margin-bottom: 10rem;
	transform: scale(1.1);

	@media ${device.tablet} {
		padding: 0 2rem;
		transform: scale(1);
		white-space: wrap;
		margin-bottom: 0;
	}
`;

//What I do
//why its important
//FAQ
//specified CTA
