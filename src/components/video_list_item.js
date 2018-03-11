import React from 'react'

const VideoListItem = ({video, onVideoSelect}) =>{
	let {snippet} = video
	let {url} = snippet.thumbnails.default;
	return(
		<li className='list-group-item' onClick={() => onVideoSelect(video)}>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={url} />
				</div>

				<div className='media-body'>
					<div className='media-heading'>{snippet.title}</div>
				</div>
			</div>
		</li>
		)
} 

export default VideoListItem