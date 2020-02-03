import React, { useEffect } from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import Section from '../layout/Section';
import HeroContact from '../forms/HeroContact';

import CTAButtonHero from '../buttons/CTAButtonHero';

export default function Hero() {
	return (
		<Section>
			<HeroClone />
			<HeroClone1 />
			<HeroSection>
				<TextContainer>
					<H1>
						We craft your online presence, so you have time to focus on the real
						work
					</H1>
					<H2>
						Want better traffic, increased sales and more revenue for your
						business?
					</H2>
					<CTAButtonHero
						linkTo='/Contact/'
						text='Book a free strategy session'
					/>
				</TextContainer>
			</HeroSection>
			<HeroContact></HeroContact>
		</Section>
	);
}

const HeroSection = styled.div`
	background: linear-gradient(to right, #0072ff, #00c6ff);
	height: 90vh;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15rem;

	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
	}

	@media ${device.tabletL} {
		padding: 15rem 5rem;
		justify-content: flex-start;
		align-items: center;
	}

	@media ${device.mobileL} {
		padding-top: 9rem;
	}

	@media ${device.mobileM} {
		padding-top: 12rem;
	}
`;

const HeroClone = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 92vh;
	background: linear-gradient(
		to right,
		hsla(213, 100%, 50%, 0.2),
		hsla(193, 100%, 50%, 0.2)
	);
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	overflow: visible;
`;

const HeroClone1 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 94vh;
	background: linear-gradient(
		to right,
		hsla(213, 100%, 50%, 0.1),
		hsla(193, 100%, 50%, 0.1)
	);
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	overflow: visible;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	max-width: 50%;

	@media ${device.tabletL} {
		align-items: center;
		justify-content: center;
		max-width: 100%;
	}
`;

const H1 = styled.h1`
	font-size: 3.6rem;
	color: white;
	font-weight: 400;
	margin-bottom: 1.6rem;

	@media ${device.tabletL} {
		font-size: 3.6rem;
		text-align: center;
	}

	@media ${device.mobileM} {
		font-size: 2.4rem;
	}
`;

const H2 = styled.h2`
	font-size: 1.6rem;
	color: white;
	font-weight: 400;
	margin-bottom: 1.6rem;
	@media ${device.tablet} {
		font-size: 1.6rem;

		text-align: center;
	}
`;
