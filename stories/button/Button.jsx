import React from 'react';
import ProtoTypes from 'prop-types';
import { options } from './constants';
import './Button.css';
import classNames from 'classnames';

export const Button = ({ colour = 'primary', size = 'md', children = 'Click Me !!!' }) => {
    return (
        <button className={classNames(`btn`,[`btn-${colour} : colour , btn-${size} : size, `])}>{children}</button>
    )
};

Button.propTypes = {
    colour: ProtoTypes.oneOf(options.colour),
    size: ProtoTypes.oneOf(options.size),
    children: ProtoTypes.node.isRequired,
};

export default Button;