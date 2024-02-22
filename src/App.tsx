import React from 'react';
import './App.css';

function hello() {
    alert('Hello')
}

// hello()

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle(){
    return <>This is APP component</>
}

const Rating = () => {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return <div>star</div>
}

const Accordion = () => {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
