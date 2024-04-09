import React from 'react';
import {Meta, Story, Preview, Props, Canvas, ArgsTable} from '@storybook/react';

import Form from '../components/Form';

Form.displayName = 'Form';

const Template: Story = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
    title: 'Form',
    component: Form,
    argTypes: {},
    parameters: {}
} as Meta;