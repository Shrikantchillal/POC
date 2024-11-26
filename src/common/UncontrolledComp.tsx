import { Container } from '@mui/material';
import React, { useRef } from 'react';

const UncontrolledComp = () => {
    const userNameRef = useRef<any>(null);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (userNameRef.current.value) {
            console.log(userNameRef.current.value);
        }
    }

    return (
        <form>
            <div>
                <label>Username</label>
                <input type='text' name='username' ref={userNameRef} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
};

export default UncontrolledComp;