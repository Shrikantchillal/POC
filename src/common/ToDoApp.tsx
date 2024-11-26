import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type ToDoAppProps = {

}

const ToDoApp: React.FC = (ToDoAppProps) => {
    const [resultItems, setResultItems] = useState<any[]>([]);
    const [currentVal, setCurrentVal] = useState<string>('');
    const [editedVal, setEditedVal] = useState('');
    const [itemEdited, setItemEdited] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, edited?: boolean) => {
        edited ? setEditedVal(event.target.value) : setCurrentVal(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCurrentVal('');
        const newItem = { id: uuidv4(), value: currentVal }
        setResultItems([...resultItems, newItem]);
    };

    const handleDelete = (index: number) => {
        const currentlyItemList = [...resultItems];
        currentlyItemList.splice(index, 1);
        setResultItems(currentlyItemList);
    };

    const handleUpdate = (id: number) => {
        const currentItemsList = [...resultItems];
        // const getCurrentItem = currentItemsList.filter((item: any) => item.id);
        // getCurrentItem[0].value = editedVal;
        currentItemsList.map((item: any) => {
            if (item.id === id) {
                item.value = editedVal;
            }
        });
        setResultItems(currentItemsList);
        setEditedVal('');
        setItemEdited(false);
    };

    const handleEdit = (id: string) => {
        setCurrentId(id);
        setItemEdited(true);
    };

    return (
        <>
            <div>
                <input type='text' onChange={handleChange} value={currentVal} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {resultItems.length === 0 ? 'There is no any items added' :
                <ul>
                    {resultItems.map((item: any, index: number) => {
                        return <li key={item.id}>
                            {itemEdited && currentId === item.id ?
                                <>
                                    <input type='text' value={editedVal} onChange={(event) => handleChange(event, true)} />
                                    <button onClick={() => handleUpdate(item.id)}>Done</button>
                                </>
                                :
                                <>
                                    {item.value}
                                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                                </>
                            }

                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    })}
                </ul>
            }
        </>
    )
};

export default ToDoApp;