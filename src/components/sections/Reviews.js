import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import Review from '../utilities/Reviews/Review';
import CTAButtonOrange from '../buttons/CTAButtonOrange';
import Section from '../layout/Section';
import SectionHeadings from '../utilities/typography/SectionHeadings';

import HyvestAvatar from '../../../posts/images/hyvest-business-logo.png';
import VAAvatar from '../../../posts/images/virtual-assistant-business-logo.png';
import PTPAvatar from '../../../posts/images/paul-the-painter-business-logo.png';

export default function Reviews() {
	return (
		<Section background='#f7f9fb' bottom='0'>
			<ContentContainer>
				<SectionHeadings
					SmallText='testimonials'
					BigText='Trusted by'
					LightText='our clients'
					lineBreak='true'
				/>

				<ReviewContainer>
					<Review
						src={PTPAvatar}
						name='Paul Read'
						business='Paul The Painter Decorator'
						review='From idea to completion, the whole process was so easy. It was a pleasure to work with Mike and have him on board. Very professional with advice, support and regular updates - truly excellent client service.'
					/>
					<Review
						flex='flex-end'
						src={HyvestAvatar}
						name='Gerald Something'
						business='Hyvest Inc.'
						review="This is excellent work. I've worked with many web developers to create several sites. This was far and away the best experience. Highly recommended and will definitely work with again."
					/>
					<Review
						src={VAAvatar}
						name='Jodie Pedwell'
						business='Jodie Pedwell - VA'
						review='It was an absolute pleasure to work with Michael. He is a highly skilled Web Developer who is full of fantastic ideas. I am extremely impressed with the quality of his work and would not hesitate to hire him again in the future. Perfect communication, very professional, amazing value for money, reliable and trustworthy.'
					/>
					{/* <Review
						flex='flex-end'
						src={HyvestAvatar}
						name='Malika'
						business='The General Cafe'
						review='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
					/> */}
				</ReviewContainer>
				<CTAContainer>
					<CTAButtonOrange linkTo='/Contact/' text='Get a quote' />
				</CTAContainer>
			</ContentContainer>
		</Section>
	);
}

const ContentContainer = styled.div`
	padding: 5rem 15rem 0 15rem;
	margin: 0 auto;
	border-radius: 3px;
	display: grid;
	grid-template-rows: 0.1fr 2fr 0.4fr;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tablet} {
		grid-template-rows: 0.1fr 2fr 0.3fr;
	}

	@media ${device.tablet} {
		padding: 1.25rem 2rem;
	}
`;

const TextContainer = styled.div`
	grid-row: 1;
`;

const ReviewContainer = styled.div`
	grid-row: 2;

	width: 100%;

	border-radius: 3px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media ${device.tablet} {
		justify-content: center;
		align-items: center;
	}
`;

const CTAContainer = styled.div`
	grid-row: 3;
	display: flex;
	justify-content: center;

	align-items: flex-start;
	padding-top: 4rem;

	@media ${device.tabletL} {
		align-items: flex-start;
		padding-top: 5rem;
	}
`;

const SmallHeading = styled.h2`
	text-transform: uppercase;
	font-size: 1.2rem;
	padding-left: 0.2rem;
	margin-bottom: 0.8rem;
	color: #0072ff;
	justify-self: flex-start;
	align-self: flex-start;
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const BigHeading = styled.h3`
	font-size: 3.6rem;
	font-weight: 600;
	text-align: left;
	margin-bottom: 1.6rem;
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const LightWeight = styled.span`
	font-size: 3.6rem;
	font-weight: 400;
`;
