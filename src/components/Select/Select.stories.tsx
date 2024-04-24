
import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    component: Select
}

export const SimpleSelect = ()=><Select value={'1'} onChange={action('Value changed')} items={[
    {value:'1',title:'Minsk'},
    {value:'2',title:'Moscow'},
    {value:'3',title:'Kiev'}
]}/>
