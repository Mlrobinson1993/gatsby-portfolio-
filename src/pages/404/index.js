import React from 'react';
import styled from 'styled-components';
import IMG from '../../../posts/images/404_page_not_found_.svg';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

export default function index() {
	return (
		<Container>
			<GlobalStyle />
			<H1>You must be lost!</H1>
			<L to='/'>Wanna go home?</L>
			<img src={IMG} alt='404 error message illustration' />
		</Container>
	);
}

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: 10px;
	font-family: 'montserrat', sans-serif;
}`;

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const L = styled(Link)`
	font-size: 3.6rem;
	font-weight: 400;
`;

const H1 = styled.h1`
	font-size: 3.6rem;
	font-weight: 600;
`;
