import React, { useState } from 'react';

import styled from 'styled-components';

import { NavProvider } from '../../context/NavContext';

import device from '../../utilities/MediaQueries';
import NavList from './NavList';
import NavCTAButton from './NavCTAButton';
import NavLogo from '../nav/NavLogo';
import NavHamburger from './NavHamburger';

export default function Navbar() {
	const [isscrolled, setisscrolled] = useState(0);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', e => {
			return window.scrollY > 150 ? setisscrolled(1) : setisscrolled(0);
		});
	}

	return (
		<NavProvider>
			<Nav isscrolled={isscrolled}>
				<NavHamburger isscrolled={isscrolled} />
				<NavLogo isscrolled={isscrolled} />
				<NavList isscrolled={isscrolled} />
				<NavCTAButton
					isscrolled={isscrolled}
					text='Get In Touch'
					linkItem='/Contact/'
					mobDisplay='none'
				/>
			</Nav>
		</NavProvider>
	);
}

const Nav = styled.nav`
	position: fixed;
	z-index: 9;
	top: 0;
	padding: ${props => (props.isscrolled ? '1rem 10rem' : '2rem 10rem;')};
	height: 12vh;
	overflow-x: hidden;
	overflow-y: visible;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	justify-content: center;
	transition: all 0.4s;
	background: ${props => (props.isscrolled ? 'white' : 'transparent')};
	box-shadow: ${props =>
		props.isscrolled && ' 0 1px 4px 0 rgba(76, 82, 103, 0.1);'};

	@media ${device.tabletL} {
		transition: all 0.4s;
		padding: 2rem 5rem;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
	}

	@media ${device.mobileL} {
		transition: all 0.4s;
		padding: 1rem 2.5rem;
		box-shadow: none;
	}
`;
