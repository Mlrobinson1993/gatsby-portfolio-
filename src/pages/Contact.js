import React, { useEffect } from 'react';

import styled from 'styled-components';
import device from '../components/utilities/MediaQueries';
import Layout from '../components/layout/Layout';

import PagesContact from '../components/forms/PagesContact';
import PageHeadings from '../components/utilities/typography/PageHeadings';
import ContactIcons from '../components/PageSections/ContactIcons';

export default function Contact() {
	useEffect(() => {
		return window.scrollTo(0, 0);
	}, []);
	return (
		<>
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
		padding: 1.25rem 2rem;
	}
`;
