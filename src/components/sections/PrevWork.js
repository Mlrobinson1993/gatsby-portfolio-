import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import device from '../utilities/MediaQueries';
import CardBottomCaption from '../utilities/cards/CardBottomCaption';
import SectionHeadings from '../utilities/typography/SectionHeadings';
import { useStaticQuery, graphql } from 'gatsby';

export default function PrevWork() {
	const data = useStaticQuery(graphql`
		query WorkQuery {
			allFile(filter: { relativePath: { regex: "/prevwork/" } }) {
				edges {
					node {
						base
						childImageSharp {
							fluid {
								base64
								sizes
								srcSet
								tracedSVG
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
	let imgObj = { marketingJob: {}, plastererJob: {}, painterJob: {} };
	data.allFile.edges.forEach((node, index) => {
		if (node.node.base.includes('market')) {
			imgObj.marketingJob.img = node.node.childImageSharp.fluid;
			imgObj.marketingJob.altText = node.node.base
				.split('.')[0]
				.split('-')
				.join(' ');
		} else if (node.node.base.includes('plastering')) {
			imgObj.plastererJob.img = node.node.childImageSharp.fluid;
			imgObj.plastererJob.altText = node.node.base
				.split('.')[0]
				.split('-')
				.join(' ');
		} else if (node.node.base.includes('painter')) {
			imgObj.painterJob.img = node.node.childImageSharp.fluid;
			imgObj.painterJob.altText = node.node.base
				.split('.')[0]
				.split('-')
				.join(' ');
		}
	});

	return (
		<Section background='#f7f9fb' bottom='0'>
			<ContentContainer>
				<SectionHeadings
					SmallText='Projects'
					BigText='Latest'
					LightText='Works'
				/>
				<CardContainer>
					<CardBottomCaption
						title="Let's Market"
						service='Web Design'
						src={imgObj.marketingJob.img}
						alt={imgObj.marketingJob.altText}
						linkTo='http://letsmarket.netlify.com/'
					/>
					<CardBottomCaption
						title='Paul The Painter Decorator'
						service='Web Design / Branding / SEO'
						src={imgObj.painterJob.img}
						alt={imgObj.painterJob.altText}
						linkTo='https://www.paulthepainterdecorator.co.uk'
					/>
					<CardBottomCaption
						title='Mattastic Plastering'
						service='Web Design / Branding / SEO'
						src={imgObj.plastererJob.img}
						alt={imgObj.plastererJob.altText}
						linkTo='/'
					/>
				</CardContainer>
			</ContentContainer>
		</Section>
	);
}

const ContentContainer = styled.div`
	padding: 5rem 15rem;
	width: 100%;
	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 5rem 3.75rem;
	}

	@media ${device.mobileL} {
		padding: 3rem 1.5rem;
	}

	@media ${device.mobileM} {
		padding: 5rem 2rem;
	}
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	@media ${device.tabletL} {
		justify-content: center;
		align-items: center;
	}
`;
