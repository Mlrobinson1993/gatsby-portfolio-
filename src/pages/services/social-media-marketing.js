import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import ServicesHero from '../../components/sections/ServicesHero';
import ServicesInfo from '../../components/sections/ServicesInfo';
import SMMSVG from '../../../posts/images/social-media-marketing.svg';
import SMMSVG1 from '../../../posts/images/social-media-marketing-1.svg';
import Accordion from '../../components/sections/FAQ';
import FAQSection from '../../components/sections/FAQSection';
import CTABanner from '../../components/utilities/CTABanner';
import PagesContact from '../../components/forms/PagesContact';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import SEO from 'react-seo-component';

export default function Web() {
	useEffect(() => {
		return window.scrollTo(0, 0);
	}, []);

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
			<Layout>
				<ServicesHero>
					<TextContainer>
						<PageHeadings
							align='center'
							SmallText='social media marketing'
							BigText='Show your brand off'
							LightText='to the world'
							lineBreak={true}
							bigTextColor='white'
							smallTextColor='white'
						/>
					</TextContainer>
				</ServicesHero>
				<ContentContainer>
					<ServicesInfo
						ImgSrc={SMMSVG}
						alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
						TitleText='Connect with your audience'
						Paragraph="Being present online isn't an option anymore, its a neccessity. Social media can be one of the most cost effective ways to get your brand in front of thousands of eyes. We use data-driven, proven strategies to get your business recognised across the most popular platforms to promote your brands awareness, credibility, and in turn, revenue."
						flexDirection='row'
					></ServicesInfo>
					<ServicesInfo
						ImgSrc={SMMSVG1}
						alt='Illustration showing a man standing inside a mobile phone poking his head through the screen with social media icons floating around'
						TitleText='Be your customers first option'
						Paragraph="A 2-minute search online lets potential customers investigate brand's before they make a purchase. We control your social media presence to ensure that your values align with your audience, creating the trust that they need to make a purchase."
						flexDirection='row-reverse'
					></ServicesInfo>
					<FAQSection>
						<Accordion
							heading='Can social media help me?'
							para='Do you want stronger customer relationships with more customer satistfaction and loyalty? Start with social media. An engaged audience is a happy audience.'
						/>
						<Accordion
							heading='What can I expect?'
							para="A bulletproof, data-driven social media strategy that's tailor made to your business, including a posting schedule, content creation ideas and engagement efficiency tips."
						/>
						<Accordion
							heading='How can you help me?'
							para='Our trained professionals use data-driven techniques to know exactly who to target, how to best engage them and where to find them for optimal results.'
						/>
					</FAQSection>
				</ContentContainer>
				<CTABanner
					HeadingText="Didn' t find an answer to your question?"
					Subheading='We can help'
					CTAText='Talk to a specialist'
					linkTo='/contact/'
				/>
				<ContentContainer>
					<PagesContact />
				</ContentContainer>
			</Layout>
		</>
	);
}

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

const ContentContainer = styled.section`
	max-width: 1100px;
	margin: 0 auto;
`;
