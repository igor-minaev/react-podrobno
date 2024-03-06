import type {Meta} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Menu'} collapsed={true}
                      onChange={() => {
                      }}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Users'} collapsed={false}
                      onChange={() => {
                      }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Users'} collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}
