import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import device from '../../utilities/MediaQueries';

export default function NavItem({ linkItem, text, isscrolled }) {
	return (
		<Fragment>
			<L
				activeStyle={{ fontWeight: '600' }}
				isscrolled={isscrolled}
				to={linkItem}
			>
				{text}
			</L>
		</Fragment>
	);
}

const L = styled(Link)`
	color: #4c5267;
	font-weight: 500;
	font-size: 1.6rem;
	text-decoration: none;
	transition: 0.2s;
	border-bottom: 2px solid transparent;

	&.active {
		border-bottom: 2px solid #4c5267;
	}
	@media ${device.tabletL} {
		font-size: 2.4rem;
	}

	&:hover {
		border-bottom: 2px solid #4c5267;
	}
`;
