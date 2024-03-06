import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';

export default {
    component: UncontrolledAccordion
}

const onChangeHandler = action('onChange')

export const AccordionDemo = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}