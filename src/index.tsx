import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export const App = (): JSX.Element => {
	return (
		<>
			<p>Hello Van</p>
			<p>Yo</p>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
