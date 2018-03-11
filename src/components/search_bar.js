import React from 'react';

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			term: ''
		}
	}

	onTermChange(term){
		this.setState({term: term})
		this.props.onSearchTermChange(term)
	}

	render(){
		return(
			<input 
			className='search-bar'
			value = {this.state.term}
			onChange={event => this.onTermChange(event.target.value) } 
			/>
			)
	}	
}
export default SearchBar