import { Card as ChakraCard } from '@chakra-ui/react';
import React from 'react';

interface ICardProps {
    children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
    return (
        <>
            <ChakraCard className=' overflow-hidden'>{children}</ChakraCard>
        </>
    );
};

export default Card;
