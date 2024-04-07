/** @type { import('@storybook/react-vite').StorybookConfig } */
const cssModules = require("../config/cssModules.js");
const config = {
    stories: [
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    webpackFinal: cssModules(),
    docs: {
        autodocs: "tag",
    },
};
export default config;
