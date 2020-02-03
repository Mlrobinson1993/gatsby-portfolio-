import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';

export default function PageHeadings({
	SmallText,
	BigText,
	LightText,
	lineBreak,
	align,
	bigTextColor,
	smallTextColor,
}) {
	return (
		<Hero>
			<TextContainer>
				<SmallHeading smallTextColor={smallTextColor} align={align}>
					{SmallText}
				</SmallHeading>
				<BigHeading bigTextColor={bigTextColor} align={align}>
					{BigText}
					{lineBreak && <br />}{' '}
					<LightWeight bigTextColor={bigTextColor} align={align}>
						{LightText}
					</LightWeight>
				</BigHeading>
			</TextContainer>
		</Hero>
	);
}

const Hero = styled.div`
	min-height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
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
	text-align: ${props => props.align || ''};
	text-transform: uppercase;
	font-size: 1.2rem;
	padding-left: 0.2rem;
	margin-bottom: 0.8rem;
	color: ${props => props.smallTextColor || '#4c5267'};
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const BigHeading = styled.h2`
	text-align: ${props => props.align || 'left'};
	font-size: 3.6rem;
	font-weight: 600;

	margin-bottom: 1.6rem;
	color: ${props => props.bigTextColor || '#4c5267'};
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const LightWeight = styled.span`
	color: ${props => props.bigTextColor || '#4c5267'};
	font-size: 3.6rem;
	font-weight: 400;
	text-align: ${props => props.align || ''};
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
