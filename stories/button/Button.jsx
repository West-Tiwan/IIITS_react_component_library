import React from 'react';
import ProtoTypes from 'prop-types';
import classNames from 'classnames';
import { options } from './constants';
import './Button.css';

export const Button = ({
                           color = 'primary',
                           size = 'md',
                           children ,
                            isDragable = false,
}) => {
    return (
        <button className={classNames(`btn`, {[`color-${color}`]: color ,[`size-${size}`] : size ,"is-dragble": isDragable})}>{children}</button>
    )
};

Button.propTypes = {
    color: ProtoTypes.oneOf(options.color),
    size: ProtoTypes.oneOf(options.size),
    children: ProtoTypes.node.isRequired,
    isDragable: ProtoTypes.bool,
};

export default Button;