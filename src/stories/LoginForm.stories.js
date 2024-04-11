import React from 'react';
import {Meta, Story, Preview, Props, Canvas, ArgsTable} from '@storybook/react';
import {LoginForm} from './LoginForm.jsx';

let Template;
Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
    displayName: 'Login Form',
    title: 'Login Form',
    component: LoginForm,
    argTypes: {},
    parameters: {}
} as Meta;