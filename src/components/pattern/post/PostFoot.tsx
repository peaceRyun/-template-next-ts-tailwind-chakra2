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
        <div className='flex flex-col space-y-2 pt-4'>
            <hr className='border-t border-gray-200 my-4' />
            <div className='flex justify-between items-center px-4 py-2'>
                {/* Edit/Delete buttons */}
                <div className='flex space-x-2'>
                    <button className='text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100'>
                        수정
                    </button>
                    <button className='text-sm text-red-600 hover:text-red-900 px-3 py-1 rounded-md hover:bg-red-50'>
                        삭제
                    </button>
                </div>

                {/* Date */}
                <div className='text-gray-500 text-sm'>2024년 12월 5일</div>
            </div>
        </div>
    );
    return <>{type === 'feed' ? <FeedFooter /> : <PersonalFooter />}</>;
};

export default PostFoot;
