import React, { useContext } from 'react';
import styled from 'styled-components';
import device from '../../utilities/MediaQueries';
import NavItem from './NavItem';
import { NavContext } from '../../context/NavContext';
import NavMobiCTAButton from './NavMobiCTAButton';

export default function NavList({ isscrolled }) {
	const { isMenuOpen, setIsMenuOpen } = useContext(NavContext);
	return (
		<NavLinkContainer isMenuOpen={isMenuOpen}>
			<NavItem
				onClick={setIsMenuOpen}
				isscrolled={isscrolled}
				linkItem='/'
				text='Home'
			/>
			<NavItem isscrolled={isscrolled} linkItem='/about/' text='About' />
			<NavItem isscrolled={isscrolled} linkItem='/services/' text='Services' />
			<NavItem isscrolled={isscrolled} linkItem='/blog/' text='Blog' />
			<NavMobiCTAButton
				text='Call To Action'
				linkItem='/contact/'
				mobDisplay='none'
			/>
		</NavLinkContainer>
	);
}

const NavLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	grid-column: 2;

	@media ${device.tabletL} {
		position: fixed;
		height: 100%;
		width: 100vw;
		transition: 0.2s ease-out;
		left: ${props => (props.isMenuOpen ? '50%' : '150%')};
		background: white;
		top: 50%;
		transform: translate(-50%, -50%);
		flex-direction: column;
		justify-content: space-evenly;
	}
`;
