import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import { Home } from './pages/Home';
import { Header } from './components/Header';

export const App = (): JSX.Element => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' render={Home} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
