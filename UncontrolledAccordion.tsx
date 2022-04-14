import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setColl] = useState(true);

   const onClickButtonHandler = () => {
        collapsed ? collapsed=false : collapsed=true
        setColl(collapsed)
    }

          return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={onClickButtonHandler}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3> -- {props.title} -- </h3>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>{props.title} 1</li>
                <li>{props.title} 2</li>
                <li>{props.title} 3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;