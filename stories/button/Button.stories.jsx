import {getListTemplate, getTemplate} from "../../helpers/storybook";
import Button from './Button';
import styles from './Button.module.css';
import {options} from './constants';

const Template = getTemplate(Button, styles);
const ListTemplate = getListTemplate(Button, styles);

export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Click Me',
    },
    argTypes: {
        color: getOptionsArgTypes(options.color),
        size: getOptionsArgTypes(options.size)
    },
};

export const Default = Template.bind({});

export const Dragable = Template.bind({});
Dragable.args = {
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