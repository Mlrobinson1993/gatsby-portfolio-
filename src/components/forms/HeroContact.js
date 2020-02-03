import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';

export default function HeroContact() {
	// const [isFocused, setIsFocused] = useState(false);

	return (
		<FormContainer>
			<ContactForm>
				<FieldSet>
					<Title>Get a Free Quote</Title>
					<Label htmlFor='name'>Name</Label>
					<FormInput
						type='text'
						name='name'
						placeholder='Jane Smith'
					></FormInput>
					<Label htmlFor='email'>Email</Label>
					<FormInput
						type='text'
						name='email'
						placeholder='Janesmith@domain.co.uk'
					></FormInput>
					<Label htmlFor='message'>Message</Label>
					<FormTextField
						name='message'
						placeholder='I need a...'
					></FormTextField>
					<SubmitBtn>Book a free consultation</SubmitBtn>
				</FieldSet>
			</ContactForm>
		</FormContainer>
	);
}

const FormContainer = styled.div`
	position: absolute;
	left: 66%;
	top: 29vh;

	padding: 3rem 2.5rem;
	border-radius: 5px;
	margin: 0;
	background: hsl(210, 23%, 95%);
	background: white;
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.2),
		0 30px 45px 0 rgba(76, 82, 103, 0.1);

	@media ${device.laptop} {
		left: 55%;
	}

	@media ${device.tabletL} {
		top: 55%;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		max-width: 375px;
	}

	@media ${device.tablet} {
		top: 55%;
	}

	@media (max-width: 675px) {
		top: 70%;
	}

	@media ${device.mobileM} {
		top: 60%;
	}
`;

const ContactForm = styled.form`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Label = styled.label`
	font-size: 0.1rem;
	color: transparent;
	transition: all 0.2s;
`;

const Title = styled.legend`
	font-size: 2.4rem;
	font-weight: bold;
	text-align: center;
	margin-bottom: 8px;
	color: #4c5267;
`;

const FieldSet = styled.fieldset`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	padding: 0;
	border: none;
`;

const FormInput = styled.input`
	margin-top: 1.2rem;
	width: 100%;
	padding: 1.5rem;
	border-radius: 3px;
	border: 1px solid hsl(210, 23%, 85%);
	display: flex;
	flex-flow: column-reverse;
	transition: all 0.2s;
	font-size: 1.4rem;
	&::placeholder {
		color: rgb(200, 193, 180);
	}

	&:focus {
		border: 1px solid #00c6ff;
	}

	@media ${device.mobileS} {
		font-size: 1.2rem;
	}
`;

const FormTextField = styled.textarea`
	margin-top: 1.2rem;
	width: 100%;
	padding: 1.5rem;
	border-radius: 3px;
	border: 1px solid hsl(210, 23%, 85%);
	display: flex;
	flex-flow: column-reverse;
	transition: all 0.2s;
	font-size: 1.4rem;
	min-height: 10rem;
	&::placeholder {
		color: rgb(200, 193, 180);
	}
	&:focus {
		border: 1px solid #00c6ff;
	}
`;

const SubmitBtn = styled.button`
	cursor: pointer;
	white-space: nowrap;
	margin-top: 1.4rem;
	padding: 1.5rem 2rem;
	text-transform: uppercase;
	width: 100%;
	border: none;
	border-radius: 3px;
	font-size: 1.6rem;
	background: #0072ff;
	color: white;
	letter-spacing: 1px;
	transition: 0.2s ease-out;

	@media ${device.mobileL} {
		font-size: 1.2rem;
		white-space: normal;
	}

	// @media ${device.mobiles} {
	// 	font-size: 0.8rem;
	// 	padding: 1.5rem 2rem;
	// }
	&:hover {
		background: rgba(0, 115, 255, 0.8);
	}
`;
