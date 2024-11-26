import React, { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    const handleSize = () => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, [])

    return [innerWidth, innerHeight];
}

export default useWindowSize;