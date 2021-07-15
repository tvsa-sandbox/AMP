const path = require("path");

module.exports = {
    stories: ["./stories/**/*.stories.mdx", "./stories/**/*.stories.@(js|jsx|ts|tsx)"],
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
        "@whitespace/storybook-addon-html",
        "storybook-amp/register",
    ],
    // webpackFinal: async (config, { configType }) => {
    //     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //     // You can change the configuration based on that.
    //     // 'PRODUCTION' is used when building the static version of storybook.

    //     // Make whatever fine-grained changes you need
    //     config.node = {
    //         fs: "empty",
    //         // global: true,
    //     };
    //     config.module.rules.push({
    //         test: /\.(woff|woff2|)$/,
    //         loaders: ["file-loader"],
    //         include: path.resolve(__dirname, "../assets/"),
    //     });

    //     // Return the altered config
    //     // console.log("conf", config.node);

    //     return config;
    // },
};