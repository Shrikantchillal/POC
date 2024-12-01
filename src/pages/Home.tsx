import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../common/MyContext';
import { Button, Container, Grid, Tabs, Typography } from '@mui/material';
import UncontrolledComp from '../common/UncontrolledComp';
import HomeContent from '../common/HomeContent';
import WithLoading from '../hoc/WithLoading.';
import ListHomeData from '../common/ListHomeData';
import ToggleComp from '../common/ToggleComp';
import CapsLockOnOff from '../common/CapsLock-OnOff';
import CounterBtn from '../common/CounterBtn';
import CounterReducer from '../common/CounterReducer';
import CounterSagas from '../common/CounterSagas';
import useWindowSize from '../custom_hooks/useWindowSize';
import TypeCheckComp from '../common/TypeCheckComp';
import ToDoApp from '../common/ToDoApp';
import TabsComp from '../components/tabsView/TabsComp';
import UserForm from '../components/form/UserForm';
import UserList from '../components/form/UserList';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts?limit=20';

export interface SuperbUser {
    userId: number;
    macAddress: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: ("Admin" | "Editor" | "Author")[];
};

type AppConfig = {
    userName: string,
    userId: number;
};

export type ChangeAppConfig = {
    [Property in keyof AppConfig as `change${Capitalize<Property>}`]: boolean;
};

type MyGenTypeEx<T> = {
    name: T,
};

type GenType<x, y> = {
    name: x,
    age: y
};


const Home = () => {
    const { text, setText } = useContext(MyContext);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userList, setUserList] = useState<any[]>([]);

    const updateUserList = (userInfo: any) => {
        setUserList([...userList, userInfo]);
    }

    const NewHomeContent = WithLoading(ListHomeData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getData = await fetch(apiUrl);
                const newData = await getData.json();
                setData(newData);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const [innerWidth, innerHeight] = useWindowSize();
    console.log('innerWidth', innerWidth);
    console.log('innerHeight', innerHeight);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const superUser = {
        userId: 12,
        username: 'shri',
    };

    const changeAppConfig: ChangeAppConfig = {
        changeUserName: true,
        changeUserId: false,
    };

    const myGenTypeEx: MyGenTypeEx<boolean> = {
        name: false,
    };

    const myData: GenType<string, number> = {
        name: 'shri',
        age: 12,
    }

    return (
        <Container maxWidth='xs'>
            <Grid container>
                <Typography variant='h5'>
                    {text}
                </Typography>
                <Button onClick={() => setText('New Title')}>
                    Click Here
                </Button>
                <UncontrolledComp />
            </Grid>

            {/* HomeContent load data with custom load */}
            {/* <HomeContent isLoading={isLoading} data={data} /> */}

            {/* HomeContent HOC withLoad */}
            {/* <NewHomeContent isLoading={isLoading} data={data} /> */}

            {/* toggle button on/off */}
            {/* <ToggleComp /> */}

            {/* caps lock on/off */}
            {/* <CapsLockOnOff /> */}

            {/* counter button  */}
            {/* <CounterBtn /> */}

            {/* counter reducer  */}
            {/* <CounterReducer /> */}

            {/* counter with redux-sagas */}
            {/* currently getting issue here in sagas */}
            {/* <CounterSagas /> */}

            {/* Typescript test comp */}
            {/* <TypeCheckComp user={superUser} changeAppConfig={changeAppConfig} /> */}

            {/* ToDo App */}
            {/* <ToDoApp /> */}

            {/* Incomplete */}
            {/* <TabsComp /> */}

            <UserForm updateUserList={updateUserList} />
            <UserList userList={userList} />

        </Container>


    )
};

export default Home;