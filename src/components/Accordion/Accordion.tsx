import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h1 onClick={props.onChange}>{props.title}</h1>
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}