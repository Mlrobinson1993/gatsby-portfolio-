import React from 'react';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import SEO from 'react-seo-component';

import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';
import Layout from '../../components/layout/Layout';

import PagesContact from '../../components/forms/PagesContact';
import PageHeadings from '../../components/utilities/typography/PageHeadings';
import ContactIcons from '../../components/PageSections/ContactIcons';

export default function Contact() {
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
				<main className='contact'>
					<TitleContainer>
						<PageHeadings
							align='center'
							SmallText='CONTACT'
							BigText='Let us bring your idea to life'
						/>

						<ContactIcons />
					</TitleContainer>

					<PagesContact />
				</main>
			</Layout>
		</>
	);
}

const TitleContainer = styled.div`
	margin: 0 auto;
	padding: 5rem 15rem 0rem 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		padding: 7.5rem 2rem 0 2rem;
	}
`;
