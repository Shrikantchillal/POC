import React from 'react';


const ListHomeData = (props: any) => {
    return (
        <>
            {props.data.map((item: any) => {
                return (
                    <div>{item.title}</div>
                )
            })}
        </>
    )
}

export default ListHomeData;