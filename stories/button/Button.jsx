import React from 'react';
import ProtoTypes from 'prop-types';
import { options } from './constants';

export const Button = ({ colour = 'primary', size = 'md', children }) => {
    return (
        <button className={`btn btn-${colour} btn-${size}`}>{children}</button>
    )
};

Button.propTypes = {
    colour: ProtoTypes.oneOf(options.colour),
    size: ProtoTypes.oneOf(options.size),
    children: ProtoTypes.node.isRequired,
};

export default Button;