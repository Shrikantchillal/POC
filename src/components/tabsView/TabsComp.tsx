import React, { useState } from 'react';
import TabsList from './TabsList';

export type tabsInfo = {
    label: string;
}

export type tabsListsType = tabsInfo[];

const tabsLists: tabsListsType = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JAVASCRIPT' },
];

const TabsComp = () => {
    const [activeTab, setActiveTab] = useState('');

    const tabClick = (event: React.FormEvent<HTMLButtonElement>) => {
        event?.preventDefault();

    }

    return (
        <div>
            <div>
                <TabsList tabsLists={tabsLists} />
            </div>
            <div>
                <p>
                    The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.
                </p>
                <p>
                    Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.
                </p>
                <p>
                    JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.
                </p>
            </div>
        </div>
    )
};

export default TabsComp;