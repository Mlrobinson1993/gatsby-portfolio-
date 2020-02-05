import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import Section from '../layout/Section';
import SectionHeadings from '../utilities/typography/SectionHeadings';
import BorderlessCard from '../utilities/cards/BorderlessCard';
import CTAButtonBlue from '../buttons/CTAButtonBlue';
import {
	faSeedling,
	faCheckSquare,
	faChartPie,
} from '@fortawesome/free-solid-svg-icons';

export default function WhyUs() {
	return (
		<Section background='white'>
			<WhyUsSection bottom='0'>
				<SectionHeadings
					SmallText='our qualities'
					BigText="Why we're the"
					LightText='best option'
					pad='0rem 4rem'
					lineBreak='true'
				/>

				<CardContainer>
					<BorderlessCard
						icon={faChartPie}
						BtnText='Start getting my business noticed'
						text='For Results'
						paragraph='Our results speak for themselves, businesses who work with us have ranked higher on Google in Birmingham, as well as the rest of the UK. Our past client websites and marketing strategies have resulted in significant increases in organic lead generation, conversion rates and revenue.'
					/>
					<BorderlessCard
						icon={faCheckSquare}
						BtnText='Start making your life easier'
						text='Our Quality'
						paragraph="Our business is built on customer satisfaction, so we're dedicated to staying up to date with the latest techniques, industry best practices, and technologies to ensure that you're only ever getting the best service possible. You and your business deserve it. "
					/>
					<BorderlessCard
						icon={faSeedling}
						BtnText='Start growing my business'
						text='Your Growth'
						paragraph='We get to know you on a personal level, and we like you to get to know us. Why? We thrive on great relationships, and our best work is a reflection of that. We capitalise on your best features and display them in their best light so that the world can appreciate them too.'
					/>
				</CardContainer>
				<CTAButtonBlue
					width='25%'
					align='center'
					linkTo='/contact/'
					text='LETS GET STARTED'
				></CTAButtonBlue>
			</WhyUsSection>
		</Section>
	);
}

const WhyUsSection = styled.div`
	padding: 5rem 15rem 5rem 15rem;

	width: 100%;
	display: grid;
	grid-template-rows: 0.75fr 2fr;

	@media ${device.laptop} {
		padding: 10rem 7.5rem;
	}

	@media ${device.tabletL} {
		padding: 7.5rem 7.5rem 2.5rem 7.5rem;
	}
	@media ${device.tablet} {
		padding: 5rem 3.75rem 1.25rem 3.75rem;
	}
	@media ${device.phablet} {
		padding: 12rem 3.75rem 1.25rem 3.75rem;
	}

	@media ${device.mobileL} {
		padding: 10rem 2rem 0rem 2rem;
		justify-content: center;
	}
`;

const CardContainer = styled.div`
	justify-self: center;
	grid-row: 2;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex: 0 0 32.3%;
	justify-content: space-between;
	margin-bottom: 4rem;

	@media ${device.tablet} {
		justify-content: center;
		margin-bottom: 0;
	}
`;
