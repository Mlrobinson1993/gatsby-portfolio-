import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';

export default function FAQ({ para, heading }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<AccordionContainer isOpen={isOpen}>
			<InnerContainer isOpen={isOpen} onClick={handleClick}>
				<ClosedView>
					<H3>{heading}</H3>
					<IconContainer isOpen={isOpen}>
						<span isOpen={isOpen}></span>
						<span isOpen={isOpen}></span>
					</IconContainer>
				</ClosedView>
				<ParaContainer>
					<Para>{para}</Para>
				</ParaContainer>
			</InnerContainer>
		</AccordionContainer>
	);
}

const AccordionContainer = styled.div`
    border-radius: 3px;
   box-shadow: 0 1px 4px 0 rgba(76,82,103,0.1);
    max-width: 1100px;
    height: ${props => (props.isOpen ? '17.5rem' : '7.5rem')};
    overflow: hidden;
    display: flex;
    justify-content: flex-start
    flex-direction: column;
    transition: 0.2s ease-in;
	margin: 1rem 0;

	@media ${device.tablet}{
		height: ${props => (props.isOpen ? '22.5rem' : '10rem')};
	}


	@media ${device.mobileL}{
		height: ${props => (props.isOpen ? '35rem' : '12.5rem')};
	}



`;

const InnerContainer = styled.div`
	display: grid;
	overflow: hidden;
	transition: 0.2s ease-in;
	grid-template-rows: 1fr 5fr;
	min-height: 20rem;
	padding: 0rem 5rem;
	width: 100%;
`;

const ClosedView = styled.div`
	display: flex;
	height: 7.5rem;
	justify-content: space-between;
	align-items: center;
	grid-row: 1;
	width: 100%;
	margin-bottom: 2rem;

	@media ${device.tablet} {
		height: 10rem;
	}

	@media ${device.mobileL} {
		height: 12.5rem;
	}
`;

const IconContainer = styled.span`
	height: 4rem;
	width: 4rem;
	border-radius: 50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	span {
		margin: auto;
		display: inline;
		position: relative;
		height: 0.3rem;
		width: 2.5rem;
		background: #0072ff;
		border-radius: 3px;
		transition: 0.2s ease-in;

		&:first-of-type {
			transform: ${props => (props.isOpen ? '' : 'rotate(90deg)')};
			top: 10px;
		}

		&:last-child {
			top: -10px;
		}
	}
`;

const H3 = styled.h3`
	color: black;
	font-size: 1.8rem;
`;
const ParaContainer = styled.div`
	grid-row: 2;
	width: 80%;
	min-height: 5rem;
	display: flex;
	align-items: flex-start;
	transition: 0.2s ease-in;
`;
const Para = styled.p`
	color: black;
	font-size: 1.6rem;
`;
