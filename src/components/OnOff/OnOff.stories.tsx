import {OnOff} from './OnOff';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: OnOff
}

const callBack = action('clicked')

export const OnMode = () => <OnOff on={true} onChange={callBack}/>
export const OffMode = () => <OnOff on={false} onChange={callBack}/>
export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onChange={setValue}/>
}

