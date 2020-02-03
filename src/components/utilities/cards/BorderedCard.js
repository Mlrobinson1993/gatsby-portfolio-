import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

export default function BorderedCard({
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
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.1);
	height: 25rem;
	width: 20rem;
	margin-bottom: 2rem;
	background: white;
	transition: 0.3s;
	border-radius: 0.3rem;
	padding: 1.2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media ${device.tabletL} {
		padding: 2rem;
		width: 100%;
	}

	&:hover {
		box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.3),
			0 30px 45px 0 rgba(76, 82, 103, 0);
	}
`;

const H3 = styled.h3`
	font-size: 1.6rem;
	font-weight: 600;
	margin-top: 1rem;
`;

const P = styled.p`
	font-size: 1.2rem;
	line-height: 1.5rem;
`;

const L = styled(Link)`
	text-decoration: none;
	color: #4c5267;
`;
