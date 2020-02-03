import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import Section from '../layout/Section';
import BorderedCard from '../utilities/cards/BorderedCard';
import BorderedCardColor from '../utilities/cards/BorderedCardColor';
import CTAButtonBlue from '../buttons/CTAButtonBlue';
import {
	faSearch,
	faLaptopCode,
	faHashtag,
	faSwatchbook,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeadings from '../utilities/typography/SectionHeadings';

export default function Services() {
	return (
		<Section background='white'>
			<ContentContainer>
				<ContentLeft>
					<SectionHeadings
						SmallText='SERVICES'
						BigText='Best solutions'
						LightText='for your business'
						padding='1rem'
						lineBreak='true'
						para="We spend time getting to know every client, who they are, what they do and how they do it. That's how we develop a perfect strategy to boost your brands growth and make your business a success."
					/>

					<CTAButtonBlue text='See our services' linkTo='/services' />
				</ContentLeft>
				<ContentRight>
					<Left>
						<BorderedCardColor
							linkTo='/services/web-design-and-development'
							icon={faLaptopCode}
							size='4x'
							heading='Web Design & Development'
							paragraph='Do you need a look great and function perfectly across devices of all sizes, from mobile phones to desktops. I can turn that crazy idea into reality.'
						/>
						<BorderedCard
							linkTo='/services/search-engine-optimisation'
							icon={faSearch}
							size='4x'
							heading='SEO'
							paragraph='Your website will be built using on-page SEO best practices from start-to-finish, ranking your site higher and increasing that opportunity for new eyes to find your business'
						/>
					</Left>
					<Right>
						<BorderedCard
							linkTo='/services/social-media-marketing'
							icon={faHashtag}
							size='4x'
							heading='Social Media Marketing'
							paragraph='My data-driven marketing strategies can help you generate a real community of followers that match your target audience. Any industry, any social media network. '
						/>
						<BorderedCard
							linkTo='/services/branding-and-strategy'
							icon={faSwatchbook}
							size='4x'
							heading='Branding Strategy'
							paragraph="Great brands build great relationships and loyal customer bases, and that's what we're going to help you achieve."
						/>
					</Right>
				</ContentRight>
			</ContentContainer>
		</Section>
	);
}

const ContentContainer = styled.div`
	padding: 0rem 15rem 0rem 15rem;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem 0rem 7.5rem;
	}

	@media ${device.tabletL} {
		padding: 1.25rem 7.5rem;
		grid-template-columns: 1fr;
		justify-content: center;
		padding: 7rem 7.5rem 2.5rem 7.5rem;
	}
	@media ${device.tablet} {
		padding: 0rem 3.75rem 0rem 3.75rem;
	}

	@media ${device.mobileL} {
		padding: 1.5rem;
	}
	@media ${device.mobileM} {
		padding: 0;
	}
`;

const ContentRight = styled.div`
	grid-column: 2;
	justify-self: flex-end;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	margin: 3rem;
	padding: 0 5rem;
	@media ${device.tabletL} {
		justify-self: center;
		grid-column: 1;
		margin: 0;
	}
	@media ${device.tabletL} {
		padding: 0;
	}
	@media ${device.phablet} {
		grid-template-columns: 1fr;
	}

	@media ${device.mobileM} {
		padding: 2rem;
	}
`;

const ContentLeft = styled.div`
	padding: 4rem 5rem;
	margin: 3rem;

	@media ${device.laptop} {
		padding: 4rem 0rem 4rem 5rem;
		margin: 3rem 0rem;
	}

	@media ${device.tabletL} {
		display: flex;
		flex-direction: column;
		margin: 0rem 1.5rem 1.5rem 1.5rem;
		padding: 0rem 5rem 4rem 5rem;

		align-items: center;
	}

	@media ${device.tablet} {
		margin: 5rem 0;
		padding: 0 2rem;
	}
`;

const Left = styled.div`
	padding-top: 4rem;

	@media ${device.phablet} {
		// padding-top: 0;
		display: flex;
		flex-direction: column-reverse;
	}
`;
const Right = styled.div`
	@media ${device.phablet} {
		display: flex;
		flex-direction: column-reverse;
	}
`;
