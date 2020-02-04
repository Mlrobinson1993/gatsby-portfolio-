import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import ServicesHero from '../../components/sections/ServicesHero';
import ServicesInfo from '../../components/sections/ServicesInfo';
import DesignSVG from '../../../posts/images/web-design-and-development.svg';
import DevSVG from '../../../posts/images/web-design-and-development-services.svg';
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
						SmallText='Web design and development'
						BigText='Give your users an experience'
						LightText='to remember'
						lineBreak={true}
						bigTextColor='white'
						smallTextColor='white'
					/>
				</TextContainer>
			</ServicesHero>
			<ContentContainer>
				<ServicesInfo
					ImgSrc={DevSVG}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Functional and beautiful'
					Paragraph='Creating websites that not only look great, but websites that are lightning fast and rank highly on search engines is what we do best. Our web designers and developers craft their websites with page speed and SEO best practices in mind, from start to finish. Ranking your site higher and increasing the opportunity for new eyes to discover your business.'
					flexDirection='row'
				></ServicesInfo>
				<ServicesInfo
					ImgSrc={DesignSVG}
					alt='Illustration showing a man sitting inside a mobile phone doing social media marketing'
					TitleText='Crafted to help you convert'
					Paragraph="Our website's are crafted with a clear focus on your goals. Whatever the desired outcome for your website we can craft a platform which focuses entirely on reaching it. We work closely with our clients to ensure that their websites are business-generating machines that leave a lasting impression on your users."
					flexDirection='row-reverse'
				></ServicesInfo>

				<FAQSection>
					<Accordion
						heading='Do I really need a website?'
						para="Businesses are 51% more likely to grow with a website and 67% of consumers look online before making a purchase, if you're not there, you're not competing."
					/>
					<Accordion
						heading='How long will it take to build my website?'
						para='Your business is as unique as you are, so it largely depends. In most cases it will take 3 weeks or less, all included. For larger projects an estimate will be quoted during a free consultation.'
					/>
					<Accordion
						heading='What if I would like to make changes?'
						para="Everybody's idea of their perfect website looks different, and that's ok. This site represents you and your business, so we're happy to work on it until it looks just as you envisaged."
					/>
					<Accordion
						heading='How much will it cost?'
						para="This is largely dependent on the complexity of your website, I cater for a variety of different budgets so get in touch and we'll see what we can work out."
					/>
				</FAQSection>
			</ContentContainer>
			<CTABanner
				HeadingText="Didn't find an answer to your question?"
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
	margin-bottom: 8rem;
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
