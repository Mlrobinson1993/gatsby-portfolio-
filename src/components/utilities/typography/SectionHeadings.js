import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';

export default function SectionHeadings({
	SmallText,
	BigText,
	LightText,
	pad,
	lineBreak,
	para,
	align,
}) {
	return (
		<TextContainer pad={pad}>
			<SmallHeading align={align}>{SmallText}</SmallHeading>
			<BigHeading align={align}>
				{BigText}
				{lineBreak && <br />} <LightWeight>{LightText}</LightWeight>
			</BigHeading>
			{para && <P>{para}</P>}
		</TextContainer>
	);
}

const TextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: flex-end;
	padding: ${props => props.pad};
	@media ${device.tabletL} {
		align-items: center;
	}

	@media ${device.mobileM} {
		padding: 0;
	}
`;

const SmallHeading = styled.h2`
	text-transform: uppercase;
	font-size: 1.2rem;
	padding-left: 0.2rem;
	margin-bottom: 0.8rem;
	color: #0072ff;
	text-align: ${props => props.align || ''};
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const BigHeading = styled.h3`
	font-size: 3.6rem;
	font-weight: 600;
	text-align: left;
	margin-bottom: 1.6rem;
	color: #4c5267;
	text-align: ${props => props.align || ''};
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
	color: #4c5267;
	@media ${device.tabletL} {
		text-align: center;
		margin-bottom: 3rem;
	}
`;
