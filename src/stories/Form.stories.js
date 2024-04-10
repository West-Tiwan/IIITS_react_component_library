import React from 'react';
import {Meta, Story, Preview, Props, Canvas, ArgsTable} from '@storybook/react';
import {Form} from './Form.jsx';

let Template;
Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
    displayName: 'Form',
    title: 'Form',
    component: Form,
    argTypes: {},
    parameters: {}
} as Meta;