import React from 'react';
import ProtoTypes from 'prop-types';
import classNames from 'classnames';
import {options} from './constants';
import styles from './Button.module.css';
import {getClasses} from '../../helpers/styles';

export const Button = ({
                           color = 'primary',
                           size = 'md',
                           children,
                           isDragable = false,
                       }) => {
    const getStyles = getClasses(styles)({
        color,
        size
    });

    return (
        <button className={getStyles("btn",["color","size"],{"is-dragable":isDragable})}>{children}</button>
    )
};

Button.propTypes = {
    color: ProtoTypes.oneOf(options.color),
    size: ProtoTypes.oneOf(options.size),
    children: ProtoTypes.node.isRequired,
    isDragable: ProtoTypes.bool,
};

export default Button;