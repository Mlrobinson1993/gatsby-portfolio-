import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function BorderlessCard({
	sizes,
	text,
	btnText,
	category,
	para,
	date,
	slug,
}) {
	return (
		<Card>
			<ImageContainer>
				<IMG sizes={sizes} />
			</ImageContainer>
			<TextContainer>
				<CategoryHeading>{category}</CategoryHeading>
				<H3>{text}</H3>
				{para && <P>{para}</P>}
				<BottomContainer>
					<Date datetime={date}>{date}</Date>
					<Btn to={slug}>
						{btnText}
						<Icon>&rarr;</Icon>
					</Btn>
				</BottomContainer>
			</TextContainer>
		</Card>
	);
}

const Card = styled.article`
	display: flex;
	flex-grow: 2;
	border-radius: 3px;
	overflow: hidden;
	align-items: space-around;
	flex-direction: column;
	grid-row: 2;
	margin: 2rem;
	width: 325px;
	&:hover {
		span {
			margin-left: 1rem;
		}
	}

	@media ${device.tablet} {
		width: 100%;
	}
`;

const ImageContainer = styled.div`
	height: 30vh;
	object-fit: cover;
	overflow: hidden;
	margin-bottom: 1.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IMG = styled(Img)`
	object-fit: cover;
	width: 100%;
	height: 200px;
`;

const TextContainer = styled.div``;

const CategoryHeading = styled.h4`
	text-transform: uppercase;
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 0.8rem;
	color: #e09124;
	justify-self: flex-start;
	align-self: flex-start;
`;

const H3 = styled.h3`
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 8px;
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	margin-bottom: 1.6rem;
`;

const BottomContainer = styled.div`
	display: flex;
	display: row-reverse;
	justify-content: space-between;
`;

const Btn = styled(Link)`
	color: #0072ff;
	text-decoration: none;
	font-size: 1.4rem;
	font-weight: 600;
	transition: all 0.2s;
`;

const Date = styled.time`
	color: rgba(0, 0, 0, 0.4)
	margin-top: 1rem;
	font-size: 1.2rem;
`;

const Icon = styled.span`
	font-size: 1.6rem;
	margin-left: 0.5rem;
	font-weight: 600;
	text-decoration: none;
	transition: 0.2s;
`;
