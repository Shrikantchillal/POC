import React from 'react';
import { tabsInfo, tabsListsType } from './TabsComp';

type TabsListProps = {
    tabsLists: tabsListsType
}

const TabsList = (props: TabsListProps) => {
    const { tabsLists } = props;
    const handleTabClick = () => {
        console.log('tabclick');
    };

    return (
        <>
            {tabsLists.map((item: tabsInfo) => {
                return <button onClick={handleTabClick}>{item.label}</button>
            })}
        </>
    )
};

export default TabsList;