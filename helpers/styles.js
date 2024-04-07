import classNames from "classnames";

const getModuleClasses = (cssModule,classKey) =>{
    return (cssModule && cssModule[classKey]) || classKey;
};

const getObjectClasses = (cssModule, classKey) => {
    return Object.keys(classKey).reduce((classes, key) => {
        const className = cssModule[key];
        return className ? {...classes,[className]: classKey[key]} : classes;
    },{});
};

const getDynamicClasses = (cssModule, props,classes) => {
    return classes.reduce((classesObject,classKey) => {
        const propValue = props[classKey];
        const className = cssModule[`${classKey}-${propValue}`];

        return className && propValue ? {...classesObject,[className]: propValue} : classesObject;
    },{});
};

export const getClasses = (cssModule) => (props)  => (...args) => {
    return classNames(
        args.map(arg => {
            if (Array.isArray(arg)) {
                return getDynamicClasses(cssModule,props,arg);
            } else if (typeof arg === "object") {
                return getObjectClasses(cssModule,arg);
            } else if (typeof arg === "string") {
                return getModuleClasses(cssModule,arg);
            }else {
                return getDynamicClasses(cssModule,props,arg);
            }
        })
    );
}