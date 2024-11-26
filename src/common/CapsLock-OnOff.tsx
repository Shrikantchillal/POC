import React, { useState } from 'react';

const CapsLockOnOff = () => {
    const [value, setValue] = useState(false);
    const checkCaps = (event: any) => {
        if (event.getModifierState('CapsLock')) {
            setValue(true);
        } else {
            setValue(false);
        }
    };

    return (
        <>
            <div>{value.toString()}</div>
            <input type='text' onKeyUp={checkCaps} />
        </>
    )
};

export default CapsLockOnOff;