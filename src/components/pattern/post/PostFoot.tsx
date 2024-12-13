import React from 'react';

const PostFoot = ({ type = 'feed' }) => {
    const FeedFooter = () => (
        <div className='flex flex-col space-y-2 pt-4'>
            {/* Date */}
            <div className='text-gray-500 text-sm px-4 py-2'>
                <span>2024년 12월 5일</span> <span>•</span> <span>6개의 댓글</span>
            </div>
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
    );

    const PersonalFooter = () => (
        <div className='flex flex-col space-y-4 pb-4'>
            {/* Tags */}
            <div className='flex flex-wrap gap-2 px-4'>
                <span className='px-2 py-1 text-xs font-medium text-teal-600 bg-teal-50 rounded-full hover:bg-teal-100 transition-colors'>
                    CRUD
                </span>
                <span className='px-2 py-1 text-xs font-medium text-teal-600 bg-teal-50 rounded-full hover:bg-teal-100 transition-colors'>
                    next.js
                </span>
            </div>

            {/* Post Info */}
            <div className='flex items-center space-x-2 px-4 text-sm text-gray-500'>
                <span>2일 전</span>
                <span className='text-gray-300'>•</span>
                <span>0개의 댓글</span>
                <span className='text-gray-300'>•</span>
                <div className='flex items-center space-x-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                        <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                    </svg>

                    <span>0</span>
                </div>
            </div>
        </div>
    );
    return <>{type === 'feed' ? <FeedFooter /> : <PersonalFooter />}</>;
};

export default PostFoot;
