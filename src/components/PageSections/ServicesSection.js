import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
export default function ServicesSection({
	imgSrc,
	heading,
	text,
	flexDirection,
	LightText,
	lineBreak,
	LinkText,
	linkTo,
	imgAlt,
}) {
	return (
		<Container flexDirection={flexDirection}>
			<Avatar sizes={imgSrc} alt={imgAlt} />

			<Caption>
				<Heading>
					{heading}
					{lineBreak && <br />}
					<LightWeight>{LightText}</LightWeight>
				</Heading>
				<Para>{text}</Para>
				<CTALink to={linkTo}>
					{LinkText}
					<Icon>&rarr;</Icon>
				</CTALink>
			</Caption>
		</Container>
	);
}

const Container = styled.figure`
	width: 100%;
	display: flex;

	justify-content: space-evenly;
	align-items: center;
	flex-direction: ${props => props.flexDirection || 'row'};
	padding: 3rem 0;


	@media ${device.tabletL} {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center
		justify-content: center;
	}
	@media ${device.tablet} {
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	`;

const Avatar = styled(Img)`
	width: 400px;
	height: 400px;
	border-radius: 50%;
	margin: 3rem;
	object-fit: cover;
	object-position: center;
	position: relative;
	@media ${device.tablet} {
		margin: 3rem auto;
	}

	@media ${device.mobileL} {
		width: 200px;
		height: 200px;
	}
`;

const Heading = styled.h4`
	font-size: 3.6rem;
	font-weight: 600;
	margin-bottom: 2rem;
	@media ${device.tabletL} {
		text-align: center;
	}
	@media ${device.mobileM} {
		font-size: 2.4rem;
	}
`;

const Para = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.5rem;

	@media ${device.tabletL} {
		text-align: center;
	}
`;

const LightWeight = styled.span`
	font-weight: 400;
	font-size: 3.6rem;
`;

const Caption = styled.figcaption`
	display: flex;
	max-width: 500px;
	flex-direction: column;

	@media ${device.tabletL} {
		align-items: center;
	}
	@media ${device.mobileS} {
		text-align: center;
		margin: 0 auto;
	}
`;

const CTALink = styled(Link)`
	margin-top: 2rem;
	font-size: 1.6rem;
	font-weight: 600;
	text-decoration: none;
	transition: 0.2s;

	&:hover {
		span {
			margin-left: 1rem;
			text-decoration: none;
		}
	}
`;

const Icon = styled.span`
	font-size: 1.8rem;
	margin-left: 0.5rem;
	font-weight: 600;
	text-decoration: none;
	transition: 0.2s;
`;
