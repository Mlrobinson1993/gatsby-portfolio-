import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';

export default function ServicesHeadings({
	SmallText,
	BigText,
	LightText,
	lineBreak,
}) {
	return (
		<Hero>
			<TextContainer>
				<SmallHeading>{SmallText}</SmallHeading>
				<BigHeading>
					{BigText}
					{lineBreak && <br />} <LightWeight>{LightText}</LightWeight>
				</BigHeading>
			</TextContainer>
		</Hero>
	);
}

const Hero = styled.div`
	min-height: 30vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

const TextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: flex-end;
	@media ${device.tabletL} {
		align-items: center;
	}

	@media ${device.mobileM} {
		padding: 0;
	}
`;

const SmallHeading = styled.h1`
	text-transform: uppercase;
	font-size: 1.2rem;
	padding-left: 0.2rem;
	margin-bottom: 0.8rem;
	color: #0072ff;
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const BigHeading = styled.h2`
	font-size: 3.6rem;
	font-weight: 600;
	text-align: left;
	margin-bottom: 1.6rem;
	color: #4c5267;
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const LightWeight = styled.span`
	font-size: 3.6rem;
	font-weight: 400;
`;

const P = styled.p`
	font-size: 1.2rem;
	padding-left: 0.2rem;
	margin-bottom: 1.6rem;
	line-height: 2rem;
	@media ${device.tabletL} {
		text-align: center;
		margin-bottom: 3rem;
	}
`;
