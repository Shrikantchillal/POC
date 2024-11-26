import React from 'react';

const WithLoading = (Component: any) => {
    return function WithLoadingCom({ isLoading, ...props }: any) {
        if (isLoading) return 'Loading';
        return <Component {...props} />
    }
};

export default WithLoading;