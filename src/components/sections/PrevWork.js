import React from 'react';
import styled from 'styled-components';
import Section from '../layout/Section';
import device from '../utilities/MediaQueries';
import CardBottomCaption from '../utilities/cards/CardBottomCaption';
import SectionHeadings from '../utilities/typography/SectionHeadings';

import MarketIMG from '../../../posts/images/marketing-business-logo.png';
import PTPIMG from '../../../posts/images/construction-painter-business-logo.png';
import MattIMG from '../../../posts/images/construction-plastering-business-logo.png';

export default function PrevWork() {
	return (
		<Section background='#f7f9fb' bottom='0'>
			<ContentContainer>
				<SectionHeadings
					SmallText='Projects'
					BigText='Latest'
					LightText='Works'
				/>
				<CardContainer>
					<CardBottomCaption
						title="Let's Market"
						service='Web Design'
						src={MarketIMG}
						alt="let's market hero page for web design and development service portfolio"
						linkTo='http://letsmarket.netlify.com/'
					/>
					<CardBottomCaption
						title='Paul The Painter Decorator'
						service='Web Design / Branding / SEO'
						src={PTPIMG}
						alt='Paul the painter hero page for web design and development, branding and strategy and search engine optimisation service portfolio'
						linkTo='https://www.paulthepainterdecorator.co.uk'
					/>
					<CardBottomCaption
						title='Mattastic Plastering'
						service='Web Design / Branding / SEO'
						src={MattIMG}
						alt='Mattastic Plastering hero page for web design and development, branding and strategy service portfolio'
						linkTo='/'
					/>
				</CardContainer>
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
		padding: 5rem 3.75rem;
	}

	@media ${device.mobileL} {
		padding: 3rem 1.5rem;
	}

	@media ${device.mobileM} {
		padding: 5rem 2rem;
	}
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	@media ${device.tabletL} {
		justify-content: center;
		align-items: center;
	}
`;

const TextContainer = styled.div`
	margin: 2rem;
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
