import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type MySelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const MySelect = (props: MySelectPropsType) => {
    const selectTitle = {
        width: 'max-content',
        border: '1px solid black',
        padding: '2px'
    }
    const [collapsed, setCollapsed] = useState(true)
    const currentItem = props.items.find(el => el.value === props.value) as ItemType
    const collapsedMode = () => setCollapsed(!collapsed)
    const onClickHandler = (value: any) => {
        props.onChange(value)
        collapsedMode()
    }
    return (
        <div>
            <div style={selectTitle} onClick={collapsedMode}>{currentItem.title}</div>
            {!collapsed && props.items.map(i => <div style={{width: 'max-content'}}
                                                     onClick={() => onClickHandler(i.value)}>{i.title}</div>)}
        </div>
    );
};