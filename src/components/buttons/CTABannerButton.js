import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { Link } from 'gatsby';

export default function CTAButtonOrange({ text, linkTo }) {
	return (
		<Btn onClick={e => e.preventDefault()}>
			<L to={linkTo}>{text}</L>
		</Btn>
	);
}

const Btn = styled.button`
	cursor: pointer;
	padding: 1.5rem 2rem;
	background-color: #e09124;
	letter-spacing: 1px;
	border: none;
	color: white;
	font-size: 1.6rem;
	font-weight: 600;
	letter-spacing: 3px;
	border-radius: 3px;
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.2);
	transition: all 0.2s;

	@media ${device.tabletL} {
		text-transform: uppercase;
		width: 40%;
	}

	@media ${device.phablet} {
		text-transform: uppercase;
		width: 60%;
		font-size: 1.2rem;
	}

	@media ${device.mobileM} {
		text-transform: uppercase;
		width: 70%;
		font-size: 1.2rem;
	}

	&:hover {
		box-shadow: none;
	}
`;

const L = styled(Link)`
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	text-decoration: none;
`;
