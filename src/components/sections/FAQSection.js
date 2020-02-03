import React from 'react';
import styled from 'styled-components';
import SectionHeadings from '../utilities/typography/SectionHeadings';

export default function FAQSection({ children }) {
	return (
		<Container>
			<SectionHeadings
				SmallText='FAQs'
				BigText='Need answers now?'
				padding='1rem'
				lineBreak='true'
			/>
			{children}
		</Container>
	);
}

const Container = styled.section`
	padding: 5rem 0;
`;
