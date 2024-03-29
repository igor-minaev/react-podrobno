
import React, {useState} from 'react';
import {MySelect} from './MySelect';

export default {
    component: MySelect
}

export const MySelectDemo = () => {
    const [value, setValue] = useState(1)
    return <MySelect value={value} onChange={setValue} items={[{title: 'Moscow', value: 1}, {title: 'Kiev', value: 2}, {
        title: 'Minsk',
        value: 3
    }]}/>
}
