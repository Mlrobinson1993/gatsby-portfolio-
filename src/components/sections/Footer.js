import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { Link } from 'gatsby';
import BottomBar from '../layout/BottomBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import logo from '../../../posts/images/m-robinson-web-developer-logo.png';

export default function Footer() {
	return (
		<>
		<ContentContainer>
			<LogoContainer>
				<FooterLogo src={logo} />
			</LogoContainer>
			<SocialsContainer>
				<IconContainer background='#3b5998'>
					<a
						href='https://facebook.com/mrobinsonwebdev'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon
							icon={faFacebookF}
							size='3x'
							color='white'
						></FontAwesomeIcon>
					</a>
				</IconContainer>
				<IconContainer background='#38A1F3'>
					<a
						href='https://twitter.com/mikeydevs'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon
							icon={faTwitter}
							size='3x'
							color='white'
						></FontAwesomeIcon>
					</a>
				</IconContainer>
				<IconContainer backgroundImg='linear-gradient(-135deg,#1400c8,#b900b4,#f50000)'>
					<a
						href='https://instagram.com/thetravelling.dev'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon
							icon={faInstagram}
							size='3x'
							color='white'
						></FontAwesomeIcon>
					</a>
				</IconContainer>
			</SocialsContainer>
			<LeadGenContainer>
				<Legend>Join my mailing list</Legend>
				<Fieldset>
					<LeadGenInput placeholder='JaneDoe@domain.co.uk'></LeadGenInput>
					<SubmitBtn type='submit'>Submit</SubmitBtn>
				</Fieldset>
			</LeadGenContainer>
		</ContentContainer>
			<BottomBar/>
			</>
	);
}

const ContentContainer = styled.footer`
	padding: 3rem 10rem;
	display: flex;
	background-color: #4c5267;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	@media ${device.tabletL} {
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: center;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const FooterLogo = styled.img`
	max-width: 40%;
`;

const SocialsContainer = styled.div`
	grid-column: 3;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media ${device.tabletL} {
		flex-direction: row;
	}
`;

const IconContainer = styled.div`
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	margin: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background || ''};
	background-image: ${props => props.backgroundImg || ''};
`;

const LeadGenContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	grid-column: 4 / 6;
	@media ${device.tabletL} {
		display: none;
	}
`;

const Fieldset = styled.fieldset`
	border: none;
	display: flex;
	flex-wrap: nowrap;
`;

const Legend = styled.legend`
	color: white;
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 2rem;
	text-align: center;
`;
const LeadGenInput = styled.input`
	padding: 1.5rem 2rem;
	border-right: none;
	border: 1px solid grey;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	min-width: 70%;
	font-size: 1.2rem;
`;

const SubmitBtn = styled.button`
	padding: 1.5rem 2rem;
	background: linear-gradient(to right, #0072ff, #00c6ff);
	border: none;
	color: white;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	font-weight: 600;
	font-size: 1.2rem;
	letter-spacing: 0.2rem;
`;
