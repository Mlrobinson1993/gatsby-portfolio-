import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';

export default function ServicesInfo({
	TitleText,
	Paragraph,
	ImgSrc,
	ImgAlt,
	flexDirection,
}) {
	return (
		<ContentContainer flexDirection={flexDirection}>
			<IMGContainer>
				<img src={ImgSrc} alt={ImgAlt} />
			</IMGContainer>
			<TextContainer>
				<H1>{TitleText}</H1>
				<Para>{Paragraph}</Para>
			</TextContainer>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	min-height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: ${props => props.flexDirection || 'row'};
	justify-content: space-around;
	align-items: center;
	margin: 4rem 0;

	@media ${device.tabletL} {
		flex-direction: column;
	}
`;

const IMGContainer = styled.div`
	width: 40%;
	height: 100%;

	@media ${device.tabletL} {
		margin: 2rem 0;
	}
`;

const TextContainer = styled.div`
	width: 60%;
	height: 100%;
	margin: 0 3rem;

	@media ${device.tabletL} {
		text-align: center;
		margin: 0 2rem;
	}
`;

const H1 = styled.h1`
	font-size: 3.6rem;
	font-weight: 600px;
	color: black;

		margin: 2rem 0;
	}
`;

const Para = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	color: black;
	line-height: 2.5rem;
`;
