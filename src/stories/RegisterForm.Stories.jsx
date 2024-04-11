import React from 'react';
import {Meta, Story, Preview, Props, Canvas, ArgsTable} from '@storybook/react';
import {RegisterForm} from './RegisterForm.jsx';

let Template;
Template = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
    displayName: 'Register Form',
    title: 'Register Form',
    component: RegisterForm,
    argTypes: {},
    parameters: {}
} as Meta;