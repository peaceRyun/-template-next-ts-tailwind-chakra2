import React from 'react';

interface ContainerProps {
    // 어떤 종류의 유효한 자식이든 받을 수 있음
    children: React.ReactNode;
}

// grid
const Container = ({ children }: ContainerProps) => {
    return <div>{children}</div>;
};

// 사이트 전체 감싸는 역할
export const Wrap = ({ children }: ContainerProps) => {
    return <div>{children}</div>;
};

// 섹션 감싸는 역할
export const Section = ({ children }: ContainerProps) => {
    return (
        <section>
            <Container>{children}</Container>
        </section>
    );
};

export default Container;
