import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';

export default function HeroContact() {
	// const [isFocused, setIsFocused] = useState(false);

	return (
		<ContentContainer>
			<FormContainer>
				<ContactForm>
					<FieldSet>
						<Title>Let's talk</Title>
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
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 5rem 2rem 5rem 1rem;
`;

const FormContainer = styled.div`
	margin: 0 auto;

	padding: 3rem 2.5rem;
	border-radius: 5px;
	background: hsl(210, 23%, 95%);
	background: white;
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
	font-size: 3.6rem;
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
	border: 1px solid rgb(220, 223, 228);
	display: flex;
	flex-flow: column-reverse;
	transition: all 0.2s;
	font-size: 1.4rem;
	transition: 0.2s;

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
	width: 50%;
	align-self: flex-end;
	border: none;
	border-radius: 3px;
	font-size: 1.3rem;
	font-weight: 600;
	background: #0072ff;
	color: white;
	letter-spacing: 1px;
	transition: 0.2s ease-out;

	@media ${device.phablet} {
		width: 100%;
	}
	@media ${device.mobileL} {
		font-size: 1.2rem;
		white-space: normal;
		width: 100%;
	}

	\ &:hover {
		background: rgba(0, 115, 255, 0.8);
	}
`;
