import _ from 'lodash' 
import React from 'react'
import ReactDOM from 'react-dom' 
import YTSearch from 'youtube-api-search' 
import SearchBar from './components/search_bar' 
import VideoList from './components/video_list' 
import VideoDetail from './components/video_detail' 

const API_KEY = 'AIzaSyDoI7-pJZDExDUQmDT5CqfqMNzJqRPUk_M';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			videos:[],
			selectedVideo: null
		}
		this.onVideoSearch('toy story')
	}

	onVideoSearch(term){
		YTSearch({key:API_KEY, term:term}, videos =>{
			this.setState({
				videos,
				selectedVideo: videos[0]
			})
		})
	}

	
	render(){
		const videoSearch = _.debounce((term=>{this.onVideoSearch(term)}), 300);

		return(
			<div>
			<header>
				<h1>YouTube</h1>
			</header>
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
				videos = {this.state.videos}
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
				/>
			</div>
		)
	}	
}


ReactDOM.render(<App/>, document.querySelector('.container'));