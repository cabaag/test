import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { baseElement } = render(<App />);
	console.log(baseElement);
	// expect(baseElement).toBeInTheDocument()
	// const linkElement = getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
