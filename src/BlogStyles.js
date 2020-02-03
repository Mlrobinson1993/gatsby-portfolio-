import styled from 'styled-components';
import React from 'react';

const H2 = styled.h2`
	color: '#4c5267';
	font-size: '2.4rem';
	font-weight: '600';
	margin: '2rem 0 2rem 0';
`;

export const Heading2 = ({ children }) => {
	return <H2>{children}</H2>;
};
