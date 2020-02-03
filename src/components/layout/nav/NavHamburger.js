import React, { useContext } from 'react';
import styled from 'styled-components';
import device from '../../utilities/MediaQueries';
import { NavContext } from '../../context/NavContext';

export default function NavHamburger({ isscrolled }) {
	const { isMenuOpen, setIsMenuOpen } = useContext(NavContext);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<Hamburger
			isMenuOpen={isMenuOpen}
			isscrolled={isscrolled}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</Hamburger>
	);
}

const Hamburger = styled.div`
	width: 40px;
	height: 40px;
	position: relative;
	right: 0;
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg);
	-webkit-transition: 0.5s ease - out;
	-moz-transition: 0.5s ease - out;
	-o-transition: 0.5s ease - out;
	transition: 0.5s ease - out;
	cursor: pointer;
	z-index: 99;
	display: none;
	grid-column: 3;

	border-radius: 50%;

	@media ${device.tabletL} {
		display: inline-block;
	}

	span {
		display: block;
		position: absolute;
		height: 3px;
		border-radius: 10px;
		width: 30px;
		opacity: 1;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(deg);
		-webkit-transition: 0.25s ease - out;
		-moz-transition: 0.25s ease - out;
		-o-transition: 0.25s ease - out;
		transition: 0.25s ease - out;
		transition: background 0.2s;
		background: ${props => (props.isscrolled ? '#0072ff' : 'black')};
	}

	span:nth-child(1),
	span:nth-child(2) {
		top: ${props => (props.isMenuOpen ? '15px' : '5px')};
		transition: 0.2s;
		transform: ${props =>
			props.isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
	}

	span:nth-child(3),
	span:nth-child(4) {
		top: 15px;
		transition: 0.2s;
		width: ${props => (props.isMenuOpen ? '0' : '20px')};
	}

	span:nth-child(5),
	span:nth-child(6) {
		top: ${props => (props.isMenuOpen ? '15px' : '25px')};
		transition: 0.2s;
		transform: ${props =>
			props.isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
	}
`;
