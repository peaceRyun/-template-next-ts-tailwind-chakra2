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
            <div>
                <Image
                    src='/images/pattern/thumb/blog1.jpg'
                    alt='불닭팽이버섯'
                    width={300}
                    height={300}
                    className='w-full'
                />
                <strong>
                    불닭팽이버섯 맵겠지? 그래도 맛있겠다. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima maxime dolorem, eaque delectus aut facere laborum asperiores expedita quae facilis excepturi
                    vero ipsa deleniti sed itaque architecto, eveniet fugiat ad.
                </strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum dolor, fugiat temporibus
                    provident repudiandae, voluptates id placeat iste ad veniam deleniti sunt, natus vero sapiente.
                    Earum odit quidem maiores.
                </p>
            </div>
            {/* PostFooter */}
        </Wrapper>
    );
};

export default BlogPost;
