const path = require("path");

module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(woff|woff2|)$/,
        loaders: ["file-loader"],
        include: path.resolve(__dirname, "../lib/"),
    });
    return config;
};
