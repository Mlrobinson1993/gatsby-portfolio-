import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';
import Img from 'gatsby-image';

//how can i change this to a functional component?

class CardBottomCaption extends Component {
	render() {
		const { src, alt, title, service, color, linkTo } = this.props;
		return (
			<Link href={linkTo} target='_blank'>
				<Card>
					<ImageContainer>
						<IMG sizes={src} alt={alt} />
					</ImageContainer>
					<CaptionContainer>
						<CaptionBold color={color}>{title}</CaptionBold>
						<CaptionLight>{service}</CaptionLight>
					</CaptionContainer>
				</Card>
			</Link>
		);
	}
}
// export default function CardBottomCaption() {
// 	return (
// 		<Card>
// 			<ImageContainer>
// 				<IMG src={src} alt={alt} />
// 			</ImageContainer>
// 			<CaptionContainer>
// 				<CaptionBold>{title}</CaptionBold>
// 				<CaptionLight>{service}</CaptionLight>
// 			</CaptionContainer>
// 		</Card>
// 	);
// }

const Card = styled.figure`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	transition: 0.2s;

	grid-row: 2;
	margin: 2rem;
	// max-width: 400px;
	// min-width: 300px;
	flex: 2 1 300px;
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.1),
		0 30px 45px 0 rgba(76, 82, 103, 0.05);

	&:hover {
		box-shadow: none;

		figcaption {
			color: #0072ff;
		}
	}

	@media ${device.mobileL} {
		margin: 0 auto;
		max-width: 80%;
	}
`;

const ImageContainer = styled.div`
	object-fit: cover;
	overflow: hidden;
`;

const IMG = styled(Img)`
	margin: auto 0;

	min-width: 100%;
	max-width: 105%;
	flex-grow: 2;
	min-height: 200px;
	max-height: 300px;
	object-position: center;
`;

const CaptionLight = styled.figcaption`
	font-weight: 400;
	font-size: 1.2rem;
`;

const CaptionContainer = styled.div`
	background: white;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: flex-start;
	padding: 1rem 2rem;
	width: 100%;
`;

const CaptionBold = styled.figcaption`
	color: black;
	font-weight: 600;
	transition: 0.2s;
	font-size: 1.6rem;
`;

const Link = styled.a`
	text-decoration: none;
	cursor: pointer;
	flex: 2 1 300px;
`;

export default CardBottomCaption;
