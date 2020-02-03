import React from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BorderlessCard({ text, paragraph, BtnText, icon }) {
	return (
		<Card>
			<IconContainer>
				<FontAwesomeIcon icon={icon} size='3x' color='white' />
			</IconContainer>
			<H3>{text}</H3>
			<P>{paragraph}</P>
		</Card>
	);
}

const Card = styled.div`

    display: flex;
    align-items: space-around;
    flex-direction: column;
    padding; 3rem;
    grid-row: 2;
	width: 300px;
	padding: 3rem 4rem;
	flex-grow: 2;

	@media ${device.tablet} {
	align-items: center;
	padding: 3rem 0;
	}

	@media ${device.mobileM} {
	align-items: center;
	padding: 3rem 2rem;
	}

`;

const IconContainer = styled.div`
	height: 6rem;
	width: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	// background: linear-gradient(to right, #0072ff, #00c6ff);
	background: #e09124;
	margin-bottom: 1.6rem;
	border-radius: 50%;
`;

const H3 = styled.h3`
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 8px;
	@media ${device.tablet} {
		text-align: center;
	}
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 2rem;
	margin-bottom: 1.6rem;
	@media ${device.tablet} {
		text-align: center;
	}
`;

// const Btn = styled(Link)`
// 	text-decoration: none;
// 	font-size: 1.2rem;
// 	font-weight: 600;
// 	transition: all 0.2s;
// 	@media ${device.tablet} {
// 		text-align: center;
// 	}
// 	&:hover {
// 		text-decoration: underline;
// 	}
// `;
