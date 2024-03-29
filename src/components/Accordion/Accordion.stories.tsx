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
const onClickCallback = action('some item was clicked')


export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Menu'} collapsed={true}
                      onChange={onChangeHandler} items={[]} onClick={onClickCallback}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Users'} collapsed={false}
                      onChange={onChangeHandler} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
        title: 'Artem',
        value: 3
    }, {title: 'Viktor', value: 4}]} onClick={onClickCallback}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Users'} collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]} onClick={(value) => {
        alert(`user with ${value} should be happy!`)
    }}/>
}
