'use client'

import { Box, chakra } from '@chakra-ui/react';
import React, { useState } from 'react';

const videos = [
    {
        id: 1,
        videoId: 'm4g0zd4E_bo',
        title: 'PIAIC offering free first quarter classes online',
        date: '24 Mar, 2020',
        thumbnail: 'https://i.ytimg.com/vi/m4g0zd4E_bo/maxresdefault.jpg'
    },
    {
        id: 2,
        videoId: 'NPGapK5aMII',
        title: 'PIAIC OFFICIAL COVID-19 Coronavirus Policy',
        date: '15 Mar, 2020',
        thumbnail: 'https://i.ytimg.com/vi/NPGapK5aMII/maxresdefault.jpg'
    },
    {
        id: 3,
        videoId: '_rUQ301EJAo',
        title: 'PIAIC Classes Coming Soon!',
        date: '9 Apr 2019',
        thumbnail: 'https://i.ytimg.com/vi/_rUQ301EJAo/maxresdefault.jpg'
    },
    {
        id: 4,
        videoId: 'RuYbBHHF4VM',
        title: 'PIAIC Classes Coming Soon',
        date: '9 Apr 2019',
        thumbnail: 'https://i.ytimg.com/vi/RuYbBHHF4VM/maxresdefault.jpg'
    },
    {
        id: 5,
        videoId: 'sqtc7s1KZEg',
        title: 'PIAIC Intro - Full Version',
        date: '16 Dec, 2018',
        thumbnail: 'https://i.ytimg.com/vi/sqtc7s1KZEg/maxresdefault.jpg'
    },
    {
        id: 6,
        videoId: 'kHLdqsLWnEM',
        title: 'PTV News - 20 Jan, 2019',
        date: '21 Jan, 2019',
        thumbnail: 'https://i.ytimg.com/vi_webp/kHLdqsLWnEM/hqdefault.webp'
    },
    {
        id: 7,
        videoId: '7fjcWkDFbcg',
        title: 'PIAIC Launch - President Arif Alvi Address',
        date: '18 Dec, 2018',
        thumbnail: 'https://i.ytimg.com/vi_webp/7fjcWkDFbcg/hqdefault.webp'
    },
    {
        id: 8,
        videoId: 'C5iWrmShgv0',
        title: 'Zia Khan Interview on Bol News',
        date: '01 Jan, 2019',
        thumbnail: 'https://i.ytimg.com/vi_webp/C5iWrmShgv0/sddefault.webp'
    },
    {
        id: 9,
        videoId: '5p8oJVVg2P4',
        title: 'PTV Coverage of PIAIC Launch Event',
        date: '01 Jan, 2019',
        thumbnail: 'data:image/jpeg;base64,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'
    },
    {
        id: 10,
        videoId: 'dRm0Y7n7xzU',
        title: `President of Pakistan Dr Arif Alvi's exclusive interview`,
        date: '29 Oct, 2018',
        thumbnail: 'https://i.ytimg.com/vi/dRm0Y7n7xzU/maxresdefault.jpg'
    },
];

const VideoList: React.FC<{ videos: any; onVideoSelect: Function }> = ({ videos, onVideoSelect }) => (
    <div style={{ height: '500px', overflowY: 'scroll' }}>
        {videos.map((video: any) => (
            <div key={video.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', cursor: 'pointer' }} onClick={() => onVideoSelect(video.videoId)}>
                <img src={video.thumbnail} alt={video.title} style={{ width: '120px', marginRight: '10px' }} />
                <div>{video.title} <br />{video.date} </div>

            </div>
        ))}
    </div>
);

const VideoSection: React.FC = () => {
    const [selectedVideoId, setSelectedVideoId] = useState(videos[0].videoId);

    return (
        <>
            <chakra.h1
                textAlign='center'
                fontSize={36}
                py='4'>Videos</chakra.h1>

            <chakra.p
                textAlign='center'
                fontSize={17}
                pb="6">it's a treasure trove of PIAIC's finest moments! From their launch event covered by PTV to an interview with Zia Khan on Bol News, these videos showcase the organization's commitment to providing free education to all. And if you're looking for some inspiration to get started, look no further than their intro video, which will have you feeling motivated and ready to learn in no time. So grab some popcorn, settle in, and get ready to be blown away by the incredible work PIAIC is doing.</chakra.p>
            <Box display="flex">
                <Box flex='1' >
                    <VideoList videos={videos} onVideoSelect={(videoId: string) => setSelectedVideoId(videoId)} />
                </Box>
                <Box flex='2' >
                    <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${selectedVideoId}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </Box>
            </Box>
        </>
    );
};

export default VideoSection;