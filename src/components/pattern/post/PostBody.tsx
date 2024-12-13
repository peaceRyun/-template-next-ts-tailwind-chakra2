import { IPostBody } from '@/types/blog.types';
import Image from 'next/image';
import React from 'react';
import { YouTubePreview } from './YouTubePreview';

const PostBody = ({ data }: IPostBody) => {
    //데이터가 없을 때 컴포넌트를 렌더링하지 않도록 처리
    if (!data) return null;

    const { title, content, imageUrl, videoId, videoTitle } = data;

    return (
        <div className='flex flex-col gap-4'>
            {videoId ? (
                <YouTubePreview videoId={videoId} title={videoTitle || title} />
            ) : (
                // 이미지가 있을 때만 렌더링
                imageUrl && (
                    <Image src={imageUrl} alt='불닭팽이버섯' width={500} height={500} className='w-full aspect-video' />
                )
            )}

            <div className='p-4 pb-8 px-4 flex flex-col gap-2'>
                <strong className='text-xl line-clamp-2'>{title}</strong>
                <p className='opacity-70 line-clamp-3'>{content}</p>
            </div>
        </div>
    );
};

export default PostBody;
