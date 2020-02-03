import React from 'react';
import styled from 'styled-components';
import device from '../../utilities/MediaQueries';
import logo from '../../../../posts/images/m-robinson-web-developer-logo.png';
import { Link } from 'gatsby';

export default function NavLogo({ isscrolled }) {
	return (
		<L to='/'>
			<Logo isscrolled={isscrolled} src={logo} alt='MR Web Developer Logo' />
		</L>
	);
}

const Logo = styled.img`
	transition: 0.2s;
	height: ${props => (props.isscrolled ? '35px' : '45px')};
	filter: ${props => (props.isscrolled ? 'grayscale(0)' : 'grayscale(1)')};

	@media ${device.tabletL} {
		justify-self: flex-start;
	}

	@media ${device.mobileL} {
		height: 30px;
	}
`;

const L = styled(Link)`
	justify-self: flex-start;
	align-self: center;

	grid-column: 1;
`;
