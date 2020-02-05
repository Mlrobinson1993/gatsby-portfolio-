import React from 'react';
import styled from 'styled-components';
import device from '../components/utilities/MediaQueries';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/layout/Layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Img from 'gatsby-image';
import SEO from 'react-seo-component';

export default ({ data, pageContext }) => {
	const { frontmatter, body, excerpt, fields } = data.mdx;
	const { title, date, cover } = frontmatter;
	const { previous, next } = pageContext;
	const {
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
		authorName,
	} = useSiteMetadata();

	let now;
	if (typeof window !== 'undefined') {
		now = new window.Date();
	}
	return (
		<Layout>
			<SEO
				title={title}
				description={excerpt}
				image={
					cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
				}
				pathname={`${siteUrl}${fields.slug}`}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
				author={authorName}
				article={true}
				publishedDate={date}
				modifiedDate={(now && now.toISOString()) || date}
			/>
			<TitleContainer>
				<Hero>
					{/* <h3>{frontmatter.category</h3> */}
					<H1>{frontmatter.title}</H1>
					<Date>{frontmatter.date}</Date>
					{!!frontmatter.cover ? (
						<Image sizes={frontmatter.cover.childImageSharp.sizes} />
					) : null}
				</Hero>
			</TitleContainer>
			<ContentContainer>
				<MDXRenderer>{body}</MDXRenderer>
				<LinkContainer>
					{next === false ? null : (
						<>
							{next && (
								<NextLink to={next.fields.slug}>
									<span>&larr;</span> Previous Post
								</NextLink>
							)}
							{previous === false ? null : (
								<>
									{previous && (
										<PrevLink to={previous.fields.slug}>
											Next Post <span>&rarr;</span>
										</PrevLink>
									)}
								</>
							)}
						</>
					)}
				</LinkContainer>
			</ContentContainer>
		</Layout>
	);
};

const TitleContainer = styled.div`
	margin: 0 auto;
	padding: 5rem 15rem 0rem 15rem;
	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 5rem 2rem 1.25rem 2rem;
	}
`;

const ContentContainer = styled.div`
	padding: 5rem 15rem;
	margin: 0 auto;
	max-width: 1100px;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 1.25rem 2rem;
	}
`;

const Hero = styled.div`
	min-height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const H1 = styled.h1`
	font-size: 3.6rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 2rem;
	@media ${device.tablet} {
		font-size: 2.4rem;
	}
`;

const Date = styled.time`
	font-size: 1.6rem;
	margin-bottom: 2rem;
	@media ${device.tablet} {
		font-size: 1.2rem;
	}
`;

const Image = styled(Img)`
	border-radius: 5px;
	width: 100%;
	max-height: 400px;
	object-position: center;
`;

const LinkContainer = styled.div`
	padding: 3rem 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const NextLink = styled(Link)`
	text-decoration: none;
	color: #0072ff;
	font-weight: 600;
	font-size: 1.6rem;
	transition: 0.2s;
	margin-right: auto;
	span {
		font-size: 2rem;
		transition: 0.2s;
		position: relative;
		left: 0;
	}
	:hover {
		span {
			left: 0.5rem;
		}
	}
`;
const PrevLink = styled(Link)`
	text-decoration: none;
	color: #0072ff;
	font-weight: 600;
	font-size: 1.6rem;
	transition: 0.2s;
	margin-left: auto;
	span {
		font-size: 2rem;
		transition: 0.2s;
		position: relative;
		right: 0;
	}
	:hover {
		span {
			right: 0.5rem;
		}
	}
`;

export const query = graphql`
	query PostsBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			excerpt
			frontmatter {
				title
				date
				cover {
					publicURL
					childImageSharp {
						sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
							...GatsbyImageSharpSizes_tracedSVG
						}
					}
				}
			}
			fields {
				slug
			}
		}
	}
`;
