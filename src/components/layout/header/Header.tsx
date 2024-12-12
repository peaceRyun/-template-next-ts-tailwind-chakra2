import Link from 'next/link';
import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import MenuHam from './Menu';
import HeaderButtons from './HeaderButtons';

const Header = () => {
    return (
        <header className='py-2'>
            <Flex className='items-center px-5 md:px-8'>
                <h1>
                    <Link href={'/'}>logo</Link>
                </h1>
                <Spacer />
                <div>
                    <HeaderButtons />
                    <MenuHam />
                </div>
            </Flex>
        </header>
    );
};

export default Header;
