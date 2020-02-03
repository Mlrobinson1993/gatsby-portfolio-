import React, { useEffect } from 'react';
import styled from 'styled-components';
import device from '../../components/utilities/MediaQueries';

export default function ServicesHero({ children }) {
	useEffect(() => {
		return window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HeroClone />
			<HeroClone1 />
			<HeroSection>
				<Hero>{children}</Hero>
			</HeroSection>
		</>
	);
}

const HeroSection = styled.div`
	background: linear-gradient(to right, #0072ff, #00c6ff);
	height: 50vh;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	@media ${device.tabletL} {
		height: 60vh;
	}
`;

const HeroClone = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 52vh;
	background: linear-gradient(
		to right,
		hsla(213, 100%, 50%, 0.2),
		hsla(193, 100%, 50%, 0.2)
	);
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	overflow: visible;
	@media ${device.tabletL} {
		height: 62vh;
	}
`;

const HeroClone1 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 54vh;
	background: linear-gradient(
		to right,
		hsla(213, 100%, 50%, 0.1),
		hsla(193, 100%, 50%, 0.1)
	);
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	overflow: visible;
	@media ${device.tabletL} {
		height: 64vh;
	}
`;

const Hero = styled.div`
	position: relative;
	z-index: 4;
	margin: 0 auto;
	height: 100%;
	padding: 5rem 15rem 0rem 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${device.laptop} {
		padding: 2.5rem 7.5rem;
		flex-direction: row;
		align-items: center;
	}

	@media ${device.tabletL} {
		flex-direction: column;
		padding: 5rem 2rem;
	}
`;
