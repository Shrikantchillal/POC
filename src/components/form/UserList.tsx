import React from 'react';

type UserList = {
    name: string;
    email: string;
};

type UserListProps = {
    userList: any[];
}

const UserList = (props: UserListProps) => {
    return (
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {props.userList.map((item: UserList) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default UserList;