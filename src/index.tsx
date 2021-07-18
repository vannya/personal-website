import React from "react"
import ReactDOM from 'react-dom';
import "./styles.css"

export const App = (): JSX.Element => {
  return <p>Hello</p>
}

ReactDOM.render(<App />, document.getElementById('root'));