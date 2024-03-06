import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';
import {OnOff} from '../OnOff/OnOff';
import {useState} from 'react';

export default {
    component: UncontrolledOnOff
}

const callBack = action('clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const BugMode = () => <div>Unsinc when change defaultValue when already rendered</div>
export const DefaultValue = ()=> <input defaultValue={'yo'} />

