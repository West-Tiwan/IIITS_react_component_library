import React from 'react';
import Button from './Button';
import {options} from './constants';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        color: {
            description: 'The color of the button',
            table: {
                type: {
                    summary : options.color.map((color, index) => `'${options}'`).join("|"),
                }
            },
            control: {type: 'radio' , options: options.color},
        },
        size: {
            description: 'The size of the button',
            table: {
                type: {
                    summary : options.size.map((size, index) => `'${options}'`).join("|"),
                }
            },
            control: {type: 'select' , options: options.size},
        },
        children: {
            control: {type: 'text'},
        }
    },
    args: {
        color: 'primary',
        size: 'md',
        children: 'Click Me',
    },
};

const Template = (args) => <Button {...args} />;

const ListTemplate = ({items, ...args}) => items.map((item, index) => <Button key={index} {...args} {...item} />);

export const Default = Template.bind({});

export const Dragable = Template.bind({});
Dragable.args = {
    children: 'Drag Me !!!',
    isDragable: true,
};

export const colour = ListTemplate.bind({});
colour.args = {
    items: options.color.map((color, index) => {
        return {color}
    }),
};
export const size = ListTemplate.bind({});
size.args = {
    items: options.size.map((size, index) => {
        return {size}
    }),
};