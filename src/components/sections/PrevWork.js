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
	// data.allFile.edges.forEach(node => {
	// 	imgArr.push({
	// 		img: node.childImageSharp.fluid,
	// 		alt: node.base.split('.')[0],
	// 	});
	// });

	// console.log(imgArr);
	//change file extension names to something containing 'work' and then map them and create cards with the result
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
						src={imgArr[1].img}
						alt={imgArr[1].altText}
						linkTo='http://letsmarket.netlify.com/'
					/>
					<CardBottomCaption
						title='Paul The Painter Decorator'
						service='Web Design / Branding / SEO'
						src={imgArr[2].img}
						alt={imgArr[2].altText}
						linkTo='https://www.paulthepainterdecorator.co.uk'
					/>
					<CardBottomCaption
						title='Mattastic Plastering'
						service='Web Design / Branding / SEO'
						src={imgArr[0].img}
						alt={imgArr[0].altText}
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
