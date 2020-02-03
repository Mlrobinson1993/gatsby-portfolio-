import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
import CTABannerButton from '../buttons/CTABannerButton';

export default function CTABanner({
	HeadingText,
	Subheading,
	CTAText,
	linkTo,
}) {
	return (
		<Banner>
			<TextContainer>
				<Heading>{HeadingText}</Heading>
				<SubHeading>{Subheading}</SubHeading>
			</TextContainer>
			<CTABannerButton linkTo={linkTo} text={CTAText} />
		</Banner>
	);
}

const Banner = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	padding: 7rem 0rem;
	background: linear-gradient(to right, #0072ff, #00c6ff);

	@media ${device.tabletL} {
		padding: 3rem 0;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
`;

const TextContainer = styled.div``;

const Heading = styled.h3`
	font-weight: 500;
	font-size: 3.6rem;
	color: white;
	@media ${device.tabletL} {
		text-align: center;
	}
`;

const SubHeading = styled.h4`
	font-weight: 400;
	font-size: 2.4rem;
	color: white;
	@media ${device.tabletL} {
		text-align: center;
		margin-bottom: 2rem;
	}
`;
