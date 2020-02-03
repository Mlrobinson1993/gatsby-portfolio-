import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from '../utilities/cards/BlogCard';
import { Link } from 'gatsby';

export const query = (size, hasExcerpt) => (
	<StaticQuery
		query={graphql`
			query SITE_INDEX_QUERY {
				allMdx(
					sort: { fields: [frontmatter___date], order: DESC }
					filter: { frontmatter: { published: { eq: true } } }
				) {
					nodes {
						id
						excerpt(pruneLength: 250)
						frontmatter {
							title
							date
							category
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
			}
		`}
		render={data => {
			return (
				<CardContainer>
					{data.allMdx.nodes
						.slice(0, size || data.allMdx.nodes.length)
						.map(({ id, frontmatter, excerpt, fields }) => (
							<L key={id} to={fields.slug}>
								<BlogCard
									sizes={frontmatter.cover.childImageSharp.sizes}
									category={frontmatter.category}
									text={frontmatter.title}
									para={hasExcerpt && excerpt}
									btnText='Check it out'
									date={frontmatter.date}
									slug={fields.slug}
								/>
							</L>
						))}
				</CardContainer>
			);
		}}
	/>
);

const CardContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	flex-wrap: wrap;

	@media ${device.tablet} {
		justify-content: center;
	}
`;

const L = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
