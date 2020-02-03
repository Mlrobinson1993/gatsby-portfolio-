import React, { Fragment } from 'react';

import styled from 'styled-components';

export default function BottomBar() {
	return (
		<Fragment>
			<Bar>
				<h3>
					Designed and Developed by{' '}
					<span> Mikey Robinson, MRobinson - Web Developer</span>
				</h3>
			</Bar>
		</Fragment>
	);
}

const Bar = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 3rem;
	background: #4c5267;
	border-top: 1px solid #0072ff;
	h3 {
		color: white;
		font-size: 1.2rem;
		font-weight: 500;
		letter-spacing: 2px;
	}

	span {
		font-size: 1.2rem;
		font-weight: 500;
		letter-spacing: 2px;
		color: #0072ff;
	}
`;
