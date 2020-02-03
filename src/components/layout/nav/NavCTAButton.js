import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import device from '../../utilities/MediaQueries';
export default function NavCTAButton({ text, linkItem, isscrolled }) {
	return (
		<Btn isscrolled={isscrolled} to={linkItem}>
			{text}
		</Btn>
	);
}

const Btn = styled(Link)`
	box-shadow: 0 5px 10px 0 rgba(76, 82, 103, 0.2);
	grid-column: 3;
	font-weight: 500;
	justify-self: flex-end;
	border-radius: 3px;
	text-decoration: none;
	font-size: 1.6rem;
	letter-spacing: 0.5px;
	transition: all 0.2s;
	color: white;
	background: ${props => (props.isscrolled ? '#0072ff' : '#e09124')};
	padding: ${props => (props.isscrolled ? '1.5rem 2rem' : '1.5rem 2rem')};
	align-self: center;
	:hover {
		box-shadow: none;
	}

	@media ${device.tabletL} {
		display: none;
	}
`;
