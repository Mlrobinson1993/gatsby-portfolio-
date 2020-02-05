import React from 'react';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';

import CTABanner from '../../components/utilities/CTABanner';
import PagesContact from '../../components/forms/PagesContact';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import RecentPosts from '../../components/sections/RecentPosts';
import PrevWork from '../../components/sections/PrevWork';
import Layout from '../../components/layout/Layout';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function About() {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			allFile(
				filter: {
					relativePath: { regex: "/mikey-robinson-the-web-designer-developer/" }
				}
			) {
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

	console.log(data.allFile.edges[0].node.id);
	return (
		<>
			<Layout>
				<main className='about'>
					<TitleContainer>
						<PageHeadings
							BigText='Let me introduce'
							LightText='myself'
							SmallText='ABOUT'
							lineBreak={true}
						/>
						<IntroContainer>
							<IMGContainer scale='1.75'>
								{data.allFile.edges.map((node, key) => (
									<IMG1
										sizes={node.node.childImageSharp.fluid}
										alt={node.node.base
											.split('.')[0]
											.split('-')
											.join(' ')}
										key={node.node.id}
									/>
								))}
							</IMGContainer>
							<TextContainer>
								<Heading>
									I'm <LightWeight>Mikey</LightWeight>
								</Heading>
								<Para>
									A professional freelance web developer, web designer, and
									software developer from Birmingham, UK. I've developed
									somewhat of a passion for eye-catching design, quirky
									animations and the 'magic' behind the technicality of the web.
								</Para>
								<Para>
									I can work on everything from small business websites to
									medium and large business websites or web-based applications,
									eCommerce stores and business portals. Whatever your need, I
									can create a tailor-made plan to solve your problem.
								</Para>
							</TextContainer>
						</IntroContainer>
					</TitleContainer>
					<PrevWork />
					<RecentPosts />
					<CTABanner
						HeadingText='Got a crazy idea?'
						Subheading="I'll help you turn it into a reality"
						CTAText='GET IN TOUCH'
						linkTo='/contact/'
					/>
					<PagesContact />
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

const IntroContainer = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: grid;
	padding: 5rem 0rem;
	min-height: 70vh;
	grid-template-columns: 1fr 1fr;
	@media ${device.tabletL} {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 5rem 3rem;
	}
`;

const IMGContainer = styled.figure`
	width: 230px;
	height: 230px;
	margin: 0 auto;
	object-fit: cover;
	object-position: 0% 50%;
	overflow: hidden;
	border-radius: 50%;
	grid-column: 1;
	border: 4px solid white;
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
	transform: scale(${props => props.scale});

	picture img {
		object-position: 0% 50% !important;
	}
	@media ${device.tabletL} {
		margin: 7rem auto;
	}

	@media ${device.mobileL} {
		width: 200px;
		height: 200px;
	}

	@media ${device.mobileM} {
		width: 150px;
		height: 150px;
	}
`;

const IMG1 = styled(Img)`
	position: relative;
	z-index: 0;
	height: 300px;
	width: auto;
	object-fit: cover;
`;

const TextContainer = styled.div`
	text-align: left;
	grid-column: 2;
	margin: 0 4rem 0 3rem;

	@media ${device.tabletL} {
		text-align: center;

		margin: 3rem 0 0 0;
	}
`;

const Heading = styled.h2`
	font-size: 3.6rem;
	font-weight: 600;
	margin: 2rem 0rem;
	color: #4c5267;
`;
const Para = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	margin-bottom: 1rem;
	color: #4c5267;
`;

const LightWeight = styled.span`
	font-size: 3.6rem;
	font-weight: 400;
	color: #4c5267;
`;
