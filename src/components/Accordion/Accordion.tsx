import React from 'react';

export const Accordion = (props:any) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:any) {
    console.log('AccordionTitle rendering')
    return <h1>{props.title}</h1>
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