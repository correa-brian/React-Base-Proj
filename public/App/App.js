import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StartUpList from './components/StartUpList'

class App extends Component {

	render(){

		return(
			<div>
					Hello REACT!
					<StartUpList />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))