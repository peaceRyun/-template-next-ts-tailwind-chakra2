'use client';

import { Button } from '@chakra-ui/react';
import { Bell, Search } from 'lucide-react';
import React from 'react';

const HeaderButtons = () => {
    const headerButtons = [
        {
            id: 1,
            label: '알림',
            icon: Bell,
            onClick: () => {
                {
                    /*알림처리*/
                }
            },
        },
        {
            id: 2,
            label: '검색',
            icon: Search,
            onClick: () => {
                {
                    /*검색함수*/
                }
            },
        },
    ];
    return (
        <>
            {headerButtons.map(({ icon: Icon, label, id, onClick }) => (
                <Button key={id} size={'sm'} variant='ghost' className='!ps-2 !pe-2' onClick={onClick}>
                    <span className='sr-only'>{label}</span>
                    <Icon size={18} />
                </Button>
            ))}
        </>
    );
};

export default HeaderButtons;
