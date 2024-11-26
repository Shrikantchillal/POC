import React from 'react';

type homeContentProps = {
    data: any;
    isLoading: boolean;
}

const HomeContent = (props: homeContentProps) => {
    const { isLoading, data } = props;
    if (isLoading) return 'Loading...';
    if (data.length === 0) return 'There is no data'
    return (
        data.map((item: any) => {
            return (
                <div>{item.title}</div>
            )
        })
    )
};

export default HomeContent;