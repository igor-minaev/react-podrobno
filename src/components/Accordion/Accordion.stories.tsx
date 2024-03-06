// import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'Users',
//         collapsed: true,
//     }
// }

export default {
    component: Accordion
}
const onChangeHandler = action('onChange')


export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Menu'} collapsed={true}
                      onChange={onChangeHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Users'} collapsed={false}
                      onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Users'} collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}
