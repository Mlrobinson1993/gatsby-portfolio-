import React from 'react';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import { query } from '../../components/queries/AllBlogPosts';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import SEO from 'react-seo-component';

//sections

import PageHeadings from '../../components/utilities/typography/PageHeadings';
import Section from '../../components/layout/Section';

import Layout from '../../components/layout/Layout';

export default function Blog() {
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
				<main className='blog'>
					<Section>
						<TitleContainer>
							<PageHeadings
								SmallText='Blog'
								BigText='Recent'
								LightText='posts'
							/>
						</TitleContainer>
						<ContentContainer>{query(undefined, true)}</ContentContainer>
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
	padding: 5rem 15rem;
	width: 100%;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 1.25rem 2rem;
	}
`;
