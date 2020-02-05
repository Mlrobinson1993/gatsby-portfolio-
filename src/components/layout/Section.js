import React from 'react';
import styled from 'styled-components';
import device from '../utilities/MediaQueries';
export default function Section({ children, background, bottom }) {
	return (
		<Wrapper style={{ background: background, marginBottom: bottom }}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100vw;
	margin-bottom: ${props => props.marginBottom || '5rem'};

	@media ${device.mobileL} {
		margin-bottom: 0;
	}
`;
