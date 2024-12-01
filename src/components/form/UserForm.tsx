import React, { useState } from 'react';

type UserFormProps = {
    updateUserList?: (userInfo: any) => void
}

const UserForm = (props: UserFormProps) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setName('');
        setEmail('');
        props.updateUserList && props.updateUserList({ name: name, email: email })
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'name') {
            setName(event.target.value);
        } else {
            setEmail(event.target.value);
        }
    };


    return (
        <>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
};

export default UserForm;