module.exports = {
    stories: ["./stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-knobs",
        "@whitespace/storybook-addon-html",
        "storybook-amp/register",
    ],
};
