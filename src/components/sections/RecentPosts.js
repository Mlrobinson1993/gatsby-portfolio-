import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';

import { query } from '../queries/AllBlogPosts';

import Section from '../layout/Section';

import SectionHeadings from '../utilities/typography/SectionHeadings';

export default function RecentPosts() {
	return (
		<Section background='white' bottom='5rem'>
			<ContentContainer>
				<SectionHeadings SmallText='Blog' BigText='Latest' LightText='posts' />
				{/*pull first three blog posts from GraphQL */}
				{query(3, false)}
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
		padding: 5rem 2rem 0rem 2rem;
	}
`;
