import { useState } from "react";
import axios from "axios";

import styles from "./styles/app.module.css";

import SearchForm from "./SearchForm";
import YoutubePlayer from "./YoutubePlayer";
import PreviewList from "./PreviewList";

const YoutubeApp = () => {
	const [videos, setVideos] = useState(null);
	const [activeVideoId, setActiveVideoId] = useState(null);

	const searchVideo = (searchPhrase) => {
		if (searchPhrase) {
			axios
				.get(
					`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6C4Zh2hEiM6N5yn-RdXyEZqsh2kXIBeY&q=${searchPhrase}&type=video`
				)
				.then((response) => {
					const videos = response.data;
					console.log(videos);
					const firstVideoId = videos.items[0].id.videoId;
					setVideos(videos); 
					// // поместить в localstorage
					setActiveVideoId(firstVideoId);
					// поместить в localstorage
				});
		} else{
			alert('Вы еще ничего не ввели')
		}
	};

	const selectVideo = (videoId) => {
		setActiveVideoId(videoId);
		// поместить в localstorage
	};

	return (
		<>
			<SearchForm onSubmit={searchVideo} />
			{videos && (
				<div className={styles.mainBlock}>
					<YoutubePlayer videoId={activeVideoId} />
					<PreviewList videos={videos} onClick={selectVideo} />

					{/* - при перезагрузке страницы сохранять главное видео и превьюшки */}
					{/* - добавить кнопку СБРОС - обнуляет localstorage */}

					{/*  - и еще реализовать кастомный хук, который при экране 600 и менее
					 выводит только три первые превьюшки */}

					 {/* ЕСЛИ МАЛО */}
					 {/*  -- реализовать блок под основным видео, где можно оставить комментарий */}
					 {/* -- выводить дату и время оставленного комментария */}

				</div>
			)}
		</>
	);
};
export default YoutubeApp;
