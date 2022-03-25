import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";

function App() {
    console.log('APP rendering')
    return (
        <div>
            <PageTitle title = {"APP Components"}/>
            <PageTitle title = {"My friends"}/>
            Article 1
            <Rating value = {3}/>
            <Accordion titleValue = {"Menu"} collapsed = {true}/>
            <Accordion titleValue = {"Users"} collapsed = {false}/>
            Article 2
            <Rating value = {4}/>
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {

    return <h1>{ props.title }</h1>
}



