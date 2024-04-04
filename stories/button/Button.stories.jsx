import React from 'react';
import Button from './Button';
import { options } from './constants';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
      colour: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
      size:{
        options: ['sm', 'md', 'lg'],
        control: { type: 'select' },
      },
      children: {
        control: { type: 'text' },
      },
    },
};

export const Default = () => <Button />;

export const colour = () =>
    options.colour.map((index, colour) => { return <Button key={index} colour={colour} />});

export const size = () =>
    options.size.map((index, size) => { return <Button key={index} size={size} />});
