import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Highlight from 'react-highlight-updated';
import '../node_modules/highlight.js/styles/mono-blue.css';

export const App = (): JSX.Element => {
	return (
		<>
			<Highlight className='javascript'>{`import React from "react"; \n<div>Test</div>`}</Highlight>
			<p>Under Development</p>
			<p>Site Incoming!</p>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
