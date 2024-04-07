import React from 'react';
import ProtoTypes from 'prop-types';
import {options} from './constants';

export const Button = ({
                           getStyles,
                           color = 'primary',
                           size = 'md',
                           children,
                           isDragable = false,
                       }) => {
    return (
        <button className={getStyles("btn", ["color", "size"], {"is-dragable": isDragable})}>{children}</button>
    )
};

Button.propTypes = {
    getStyles: ProtoTypes.func.isRequired,
    color: ProtoTypes.oneOf(options.color),
    size: ProtoTypes.oneOf(options.size),
    children: ProtoTypes.node.isRequired,
    isDragable: ProtoTypes.bool,
};

export default withStyles(styles)(Button);