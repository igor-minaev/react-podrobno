import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('UncontrolledAccordion rendering')
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
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