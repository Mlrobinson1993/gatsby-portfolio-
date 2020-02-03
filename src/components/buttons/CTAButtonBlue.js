import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { Link } from 'gatsby';

export default function CTAButtonBlue({ text, linkTo, width, align }) {
	return (
		<Btn align={align} width={width} onClick={e => e.preventDefault()}>
			<L to={linkTo}>{text}</L>
		</Btn>
	);
}

const Btn = styled.button`
	cursor: pointer;
	padding: 1.5rem 2rem;
	background: linear-gradient(to right, #0072ff, #00c6ff);
	letter-spacing: 1px;
	border: none;
	color: white;
	font-size: 1.6rem;
	font-weight: 600;
	letter-spacing: 2px;
	border-radius: 3px;
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.2);
	transition: all 0.2s;
	justify-self: ${props => props.align};
	width: ${props => props.width || ''};
	@media ${device.tabletL} {
		text-transform: uppercase;
		width: 60%;
	}

	@media ${device.mobileL} {
		width: 100%;
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
