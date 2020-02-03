import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import ServicesHero from '../../components/sections/ServicesHero';
import ServicesInfo from '../../components/sections/ServicesInfo';
import BrandingSVG from '../../../posts/images/branding-and-strategy-world.svg';
import BrandingSVG1 from '../../../posts/images/Branding-and-strategy1.svg';
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
						SmallText='Branding & Strategy'
						BigText='Start getting your'
						LightText='brand noticed'
						bigTextColor='white'
						smallTextColor='white'
					/>
				</TextContainer>
			</ServicesHero>
			<ContentContainer>
				<ServicesInfo
					ImgSrc={BrandingSVG}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Make a bulletproof brand image'
					Paragraph='We help businesses ensure that their online presence is aligned perfectly with their physical presence. We help you develop the story behind your brand, your visual identity and your online presence to help your brand create an impact with your target audience.'
					flexDirection='row'
				></ServicesInfo>
				<ServicesInfo
					ImgSrc={BrandingSVG1}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Connect with your audience'
					Paragraph="We're experts in branding strategy, identity and brand management. We're able to work with you to provide a complete view about what your brand represents and how you want to portray that message, allowing us to capitalise on your unique selling point to give your customers value where it matters the most."
					flexDirection='row-reverse'
				></ServicesInfo>

				<FAQSection>
					<Accordion
						heading='What is branding?'
						para='The branding process is designed to create a unique image for your business. It helps to tell your story, differentiate you from your competition and attract your ideal clients.'
					/>

					<Accordion
						heading='How can it help me?'
						para='Part of building a brand is creating trust and relationships between consumers and businesses. Better relationsips means more referrals and faster growth.'
					/>
					<Accordion
						heading='Is branding just a new logo?'
						para='A logo is just one piece of the puzzle. Your brand is everything from your logo to your businesses message and even your tone of voice on social media.'
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

const ContentContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
`;
