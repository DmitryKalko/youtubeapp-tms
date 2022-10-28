import React from 'react';

const YoutubePlayer = (props) => {
    const { videoId } = props;
        // сдесь достать из localstorage videoId и вставить в JSX
    return(
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + videoId}
        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    )
}

export default YoutubePlayer;