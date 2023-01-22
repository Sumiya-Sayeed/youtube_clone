import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading...';
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {
                videos.map((i, index) => (
                    <Box key={index}>
                        {i.id.videoId && <VideoCard video={i} />}
                        {i.id.channelId && <ChannelCard channelDetail={i} />}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos
