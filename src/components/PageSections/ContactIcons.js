import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default function ContactIcons() {
	return (
		<ContentContainer>
			<IconContainer background='#0072ff'>
				<h3>EMAIL</h3>
				<EmailContact href='mailto:mrobinsonwebdev@gmail.com'>
					<FontAwesomeIcon background='#0072ff' icon={faEnvelope} size='3x' />
				</EmailContact>
			</IconContainer>

			<IconContainer background='#e09124'>
				<h3>LIVE CHAT</h3>
				<LiveChatContact
					href='https://facebook.com/mrobinsonwebdev'
					target='_blank'
				>
					<FontAwesomeIcon
						background='#e09124'
						icon={faCommentAlt}
						size='3x'
					></FontAwesomeIcon>
				</LiveChatContact>
			</IconContainer>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	min-height: 20vh;

	@media ${device.tabletL} {
		justify-content: center;
	}

	@media ${device.mobileL} {
		flex-direction: column;
	}
`;

const IconContainer = styled.div`
	cursor: pointer;
	background-color: ${props => props.background};
	height: 150px;
	width: 200px;
	background: white;
	border-bottom: 3px solid ${props => props.background};
	color: ${props => props.background};
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 0.4s;
	box-shadow: rgba(46, 50, 128, 0.15) 0px 6px 18px 0px;
	margin: 5rem 0 7rem 0;

	&:first-child {
		margin-right: 2rem;
	}

	.fa-comment-alt,
	.fa-envelope {
		color: ${props => props.background};
	}

	h3 {
		font-size: 1.6rem;
		display: none;
		opacity: 0;
		color: white;
		margin-top: 2rem;
		display: inline-block;
		opacity: 1;
		color: ${props => props.background};
	}

	&:hover {
		background: ${props => props.background};

		.fa-comment-alt,
		.fa-envelope {
			color: white;
		}

		h3 {
			color: white;
		}
	}

	@media ${device.tabletL} {
		margin: 3rem 4rem 7rem 4rem;
		height: 150px;
		width: 200px;
		border-radius: 3px;

		background: white;
		border-bottom: 3px solid ${props => props.background};
		color: ${props => props.background};

		.fa-comment-alt,
		.fa-envelope {
			color: ${props => props.background};
		}
		h3 {
			margin-top: 2rem;
			display: inline-block;
			opacity: 1;
			color: ${props => props.background};
		}

		&:first-child {
			margin-right: 0rem;
		}
		&:hover {
			box-shadow: rgba(46, 50, 128, 0.15) 0px 9px 30px 0px;
		}
	}

	@media ${device.mobileL} {
		margin: 2rem 0;

		&:hover {
			box-shadow: rgba(46, 50, 128, 0.15) 0px 9px 30px 0px;
		}
		&:last-child {
			margin-bottom: 4rem;
		}
	}
`;

const EmailContact = styled.a`
	height: 100%;
	width: 100%;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.6rem;
	color: white;
	align-items: center;
	cursor: pointer;
`;

const LiveChatContact = styled.a`
	height: 100%;
	width: 100%;
	border: none;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.6rem;
	color: white;
	background: transparent;
	align-items: center;
	cursor: pointer;
`;
