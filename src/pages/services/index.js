import React from 'react';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import ServicesSection from '../../components/PageSections/ServicesSection';
import PagesContact from '../../components/forms/PagesContact';
import Section from '../../components/layout/Section';
import CTABanner from '../../components/utilities/CTABanner';
import Layout from '../../components/layout/Layout';
import { useStaticQuery, graphql } from 'gatsby';

export default function Services() {
	const data = useStaticQuery(graphql`
		query ServicesQuery {
			allFile(filter: { relativePath: { regex: "/service-image/" } }) {
				edges {
					node {
						base
						childImageSharp {
							fluid {
								base64
								sizes
								srcSet
								aspectRatio
								src
							}
						}
					}
				}
			}
		}
	`);

	let imgArr = [];
	data.allFile.edges.forEach(node => {
		imgArr.push({
			img: node.node.childImageSharp.fluid,
			altText: node.node.base
				.split('.')[0]
				.split('-')
				.join(' '),
		});
	});

	console.log(imgArr);

	return (
		<>
			<Layout>
				<main className='services'>
					<Section>
						<TitleContainer>
							<PageHeadings
								SmallText='Services'
								BigText="We've got the best solutions"
								lineBreak='true'
								LightText='for your business'
							/>
						</TitleContainer>
						<ContentContainer>
							<ServicesSection
								lineBreak='true'
								imgSrc={imgArr[1].img}
								imgAlt={imgArr[1].altText}
								heading='Web Design'
								LightText=' & Development'
								text="We help you to create fantastic user experience for your customers from the moment they set eyes opon your brand. Starting with your website design. We'll create a responsive, fast and conversion-rate-optimised website and help to turn your leads into conversions."
								LinkText='Increase my conversions'
								linkTo='/services/web-design-and-development'
							/>
							<ServicesSection
								lineBreak='true'
								flexDirection='row-reverse'
								imgSrc={imgArr[1].img}
								imgAlt={imgArr[1].altText}
								heading='Social Media'
								LightText='Marketing (SMM)'
								text="Our social media marketing can help you get your business in front of thousands of eyes, every day. If you're not on social media in 2020, you're behind the curve. Your competitors are already leveraging the amount of time your audience spends looking at their phones every day, and you should too."
								LinkText='Get my business noticed'
								linkTo='/services/social-media-marketing'
							/>
							<ServicesSection
								lineBreak='true'
								imgSrc={imgArr[3].img}
								imgAlt={imgArr[3].altText}
								heading='Search Engine'
								LightText='Optimisation (SEO)'
								text="Ranking highly on Google is a tough task. That's why our SEO experts keep on top of the latest industry trends and techniques to get your business onto that coveted first page."
								LinkText='Show me the power of SEO'
								linkTo='/services/search-engine-optimisation'
							/>
							<ServicesSection
								flexDirection='row-reverse'
								imgSrc={imgArr[0].img}
								imgAlt={imgArr[0].altText}
								heading='Branding'
								LightText=' & Strategy'
								text="Whether you're just starting out or an industry veteran, the importance of branding for your business is second-to-none. Great brands build great relationships and loyal customer bases, and that's what we're going to help you achieve. "
								LinkText='Make my brand unmissable'
								linkTo='/services/branding-and-strategy'
							/>
						</ContentContainer>
					</Section>
					<CTABanner
						HeadingText='Unsure of what service you need?'
						Subheading="Don't worry, we can help."
						CTAText='Speak to a specialist'
						linkTo='/contact/'
					/>
					<Section bottom='0'>
						<PagesContact />
					</Section>
				</main>
			</Layout>
		</>
	);
}

const TitleContainer = styled.div`
	margin: 0 auto;
	padding: 5rem 15rem 0rem 15rem;
	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 1.25rem 2rem;
	}
`;
const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 1300px;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 1.25rem 2rem;
	}
`;
