import React, {Component} from 'react'
import ListItem from '../components/ListItem'

class StartUpList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			startups: [
					{name: 'Plated', city: 'San Francisco', url: 'www.plated.com'},
					{name: 'Amazon', city: 'Seattle', url: 'www.amazon.com'},
					{name: 'Twitter', city: 'San Francisco', url: 'www.twitter.com'},
					{name: 'Google', city: 'San Francisco', url: 'www.google.com'}
			]
		}
	}

	render(){
		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} entity={startup} />
		})

		return(

			<div>
				<ol>
						{ list }
				</ol>
			</div>
		)
	}

}

export default StartUpList