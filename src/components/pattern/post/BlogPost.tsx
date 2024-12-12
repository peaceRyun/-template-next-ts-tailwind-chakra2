import React from 'react';
import Card from '../card/Card';
import Image from 'next/image';

interface IBlongPostProps {
    isCard?: boolean;
}

const BlogPost = ({ isCard }: IBlongPostProps) => {
    const Wrapper = isCard ? Card : 'div';
    // const wrapperClass = isCard ? 'bg-white' : '';

    return (
        <Wrapper>
            {/* PostBody */}
            <div className='flex flex-col gap-4'>
                <Image
                    src='/images/pattern/thumb/blog1.jpg'
                    alt='불닭팽이버섯'
                    width={500}
                    height={500}
                    className='w-full aspect-video'
                />
                <div className='p-4 pb-8 px-4 flex flex-col gap-2'>
                    <strong className='text-xl line-clamp-2'>불닭팽이버섯 맵겠지? 그래도 맛있겠다.</strong>
                    <p className='opacity-70 line-clamp-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum dolor, fugiat
                        temporibus provident repudiandae, voluptates id placeat iste ad veniam deleniti sunt, natus vero
                        sapiente. Earum odit quidem maiores.
                    </p>
                </div>
            </div>
            {/* PostFooter */}
            <div className='flex flex-col space-y-2 pt-4'>
                {/* Date */}
                <div className='text-gray-500 text-sm px-4 py-2'>2024년 12월 5일 • 6개의 댓글</div>
                <hr className='border-t border-gray-200 my-4' />
                {/* Author and Likes Row */}
                <div className='flex justify-between items-center p-4'>
                    <div className='flex items-center space-x-2'>
                        {/* Author Icon and Name */}
                        <span className='inline-block bg-gray-200 rounded-full w-6 h-6'></span>
                        <span className='text-sm text-gray-600'>by 여우</span>
                    </div>

                    {/* Likes */}
                    <div className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                            />
                        </svg>
                        <span className='text-sm text-gray-600'>107</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default BlogPost;
