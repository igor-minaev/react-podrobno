import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function hello() {
    alert('Hello')
}

// hello()

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const [on, setOn] = useState(true)

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            ---Article 1---
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <OnOff on={on} setOn={setOn}/>
            ---Article 2---
            {/*<UncontrolledOnOff on={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
