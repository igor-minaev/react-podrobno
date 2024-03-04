import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        backgroundColor: on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

