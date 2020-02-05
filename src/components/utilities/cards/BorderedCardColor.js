import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BorderedCardColor({
	paragraph,
	heading,
	icon,
	size,
	linkTo,
}) {
	return (
		<L to={linkTo}>
			<Card>
				<FontAwesomeIcon icon={icon} size={size} />
				<H3>{heading}</H3>
				<P>{paragraph}</P>
			</Card>
		</L>
	);
}

const Card = styled.div`
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.2),
		0 30px 45px 0 rgba(76, 82, 103, 0.1);
	background: linear-gradient(to right, #0072ff, #00c6ff);
	color: white;
	height: 25rem;
	width: 20rem;
	margin-bottom: 2rem;
	transition: 0.3s;
	border-radius: 0.3rem;
	padding: 1.2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	&:hover {
		box-shadow: none;
	}

	@media ${device.tabletL} {
		padding: 2rem;
		width: 100%;
		margin-bottom: 0;
	}
`;

const H3 = styled.h3`
	margin-top: 1rem;
	font-size: 1.6rem;
	font-weight: 600;
`;

const P = styled.p`
	font-size: 1.2rem;
	line-height: 1.5rem;
`;
const L = styled(Link)`
	text-decoration: none;
	color: #4c5267;
`;
