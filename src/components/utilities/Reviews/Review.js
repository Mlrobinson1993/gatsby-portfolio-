import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../MediaQueries';

class Review extends Component {
	render() {
		const { name, business, review, src, alt, flex } = this.props;

		return (
			<ReviewCard flex={flex}>
				<Avatar src={src} alt={alt}></Avatar>
				<TextContainer>
					<Name>{name}</Name>
					<Business>{business}</Business>
					<P>{review}</P>
				</TextContainer>
			</ReviewCard>
		);
	}
}

const ReviewCard = styled.div`
	width: 80%;
	box-shadow: 0 20px 30px 0 rgba(76, 82, 103, 0.1),
		0 30px 45px 0 rgba(76, 82, 103, 0.05);
	border-radius: 0.3rem;
	background: white;
	align-self: ${props => props.flex || 'flex-start'};
	margin: 2rem 0rem;
	padding: 5rem;
	display: grid;
	grid-template-columns: 1fr 5fr;
	max-height: 40rem;
	overflow: scroll;

	@media ${device.tablet} {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 2.5rem;
	}

	@media ${device.mobileL} {
		padding: 2rem;
		width: 100%;
	}
`;
const Avatar = styled.img`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	object-fit: contain;
	margin-right: 3rem;

	@media ${device.tabletL} {
		margin: 0;
		height: 10rem;
		width: 10rem;
	}
`;
const Name = styled.h3`
	font-size: 1.6rem;
	margin-bottom: 4px;
	@media ${device.tablet} {
		text-align: center;
		margin-top: 1rem;
	}
`;
const Business = styled.h4`
	font-size: 1.6rem;
	font-weight: 400;
	margin-bottom: 8px;
	@media ${device.tablet} {
		text-align: center;
		// margin-top: 1rem;
	}
`;
const P = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.5rem;
	@media ${device.tablet} {
		text-align: center;
		margin-top: 0.5rem;
	}
`;

const TextContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default Review;
