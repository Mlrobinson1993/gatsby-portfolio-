import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { NavContext } from './src/components/context/NavContext';

const components = {
	h2: ({ children }) => (
		<h2
			style={{
				color: '#4c5267',
				fontSize: '2.8rem',
				fontWeight: '600',
				margin: '3rem 0 1.5rem 0',
			}}
		>
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3
			style={{
				color: '#4c5267',
				fontSize: '2.4rem',
				fontWeight: '600',
				margin: '2rem 0 2rem 0',
			}}
		>
			{children}
		</h3>
	),
	p: ({ children }) => (
		<p
			style={{
				color: '#4c5267',
				fontSize: '1.6rem',
				fontWeight: '400',
				marginBottom: '1rem',
				lineHeight: '2.6rem',
			}}
		>
			{children}
		</p>
	),
	a: ({ children, href }) => (
		<a
			href={href}
			style={{
				color: '#4c5267',
				fontSize: '1.6rem',
				fontWeight: '400',
				marginBottom: '1rem',
				lineHeight: '2rem',
			}}
		>
			{children}
		</a>
	),
	ul: ({ children }) => (
		<ul
			style={{
				margin: '2rem',
			}}
		>
			{children}
		</ul>
	),
	li: ({ children }) => (
		<li
			style={{
				color: '#4c5267',
				fontSize: '1.6rem',
				fontWeight: '400',
				marginBottom: '0.5rem',
			}}
		>
			{children}
		</li>
	),
	em: ({ children }) => (
		<em
			style={{
				color: '#4c5267',
				fontSize: '1.6rem',
				fontWeight: '400',
			}}
		>
			{children}
		</em>
	),
	strong: ({ children }) => (
		<strong
			style={{
				color: '#4c5267',
				fontSize: '1.6rem',
				fontWeight: '600',
			}}
		>
			{children}
		</strong>
	),
	hr: () => (
		<hr
			style={{
				marginBottom: '2rem',
			}}
		/>
	),
};

export const wrapRootElement = ({ element }) => (
	<>
		<NavContext.Provider>
			<MDXProvider components={components}>{element}</MDXProvider>
		</NavContext.Provider>
	</>
);
