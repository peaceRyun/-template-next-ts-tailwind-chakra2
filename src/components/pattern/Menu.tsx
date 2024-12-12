import { Button, Menu as CustomMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';
import React from 'react';

interface IMenuProps {
    buttonText: React.ReactNode;
    items: IMenuItem[]; //객체 배열
    variant?: string;
}

// 객체 타입 정의
interface IMenuItem {
    label: string;
    onClick: () => void;
}

const Menu = ({ items, buttonText, variant }: IMenuProps) => {
    return (
        <>
            <CustomMenu>
                <MenuButton
                    as={Button}
                    rightIcon={typeof buttonText === 'string' ? <ChevronDownIcon /> : undefined}
                    variant={typeof variant !== null ? variant : undefined}
                >
                    {buttonText}
                </MenuButton>
                <MenuList>
                    {items.map((item, index) => (
                        <MenuItem key={index} onClick={item.onClick}>
                            {item.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </CustomMenu>
        </>
    );
};

export default Menu;
