module.exports = {
    stories: ["./stories/**/*.stories.@(js|jsx|ts|tsx)", "./stories/**/*.stories.mdx"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-knobs",
        "@whitespace/storybook-addon-html",
        "storybook-amp/register",
    ],
};
