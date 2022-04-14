import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    console.log('APP rendering')
    return (
        <div className={"App"}>


            <OnOff/>
            {/*<OnOff/>
            <OnOff/>*/}
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<PageTitle title = {"This is APP Components"}/>
            <PageTitle title = {"My friends"}/>
            Article 1*/}
            <Rating value = {2}/>
            <UncontrolledRating/>
            {/*<Rating value = {3}/>

            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>*/}

        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return <h1>{props.title}</h1>
}



