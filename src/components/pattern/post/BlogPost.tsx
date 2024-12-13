import React from 'react';
import Card from '../card/Card';
import PostFoot from './PostFoot';
import PostBody from './PostBody';
import { IBlongPostProps } from '@/types/blog.types';

const BlogPost = ({ isCard, data }: IBlongPostProps) => {
    const Wrapper = isCard ? Card : 'div';
    // const wrapperClass = isCard ? 'bg-white' : '';

    return (
        <Wrapper className='pb-5'>
            {/* PostBody */}
            <PostBody data={data} />
            {/* PostFooter */}
            <PostFoot type='personal' />
        </Wrapper>
    );
};

export default BlogPost;
