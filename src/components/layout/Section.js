import React from 'react';
import styled from 'styled-components';

export default function Section({ children, background, bottom }) {
	return (
		<Wrapper style={{ background: background, marginBottom: bottom }}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100vw;
	margin-bottom: 5rem;
`;
