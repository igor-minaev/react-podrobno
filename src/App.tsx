import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function hello() {
    alert('Hello')
}

// hello()

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            ---Article 1---
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Users'}/>
            ---Article 2---
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
