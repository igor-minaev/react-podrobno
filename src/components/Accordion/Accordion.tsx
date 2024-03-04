import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('UncontrolledAccordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.setAccordionCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h1 onClick={props.onClick}>{props.title}</h1>
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