import React from 'react';

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

