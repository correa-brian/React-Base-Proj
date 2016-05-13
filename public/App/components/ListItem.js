import React, {Component} from 'react'

class ListItem extends Component {

	render(){

		return(
			<li>{this.props.entity.name}, {this.props.entity.city}, {this.props.entity.url} </li>
		)
	}

}

export default ListItem