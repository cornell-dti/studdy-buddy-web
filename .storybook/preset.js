const path = require('path');

module.exports = {
    webpackFinal: async (config) => {
        const {
            module = {
                rules: []
            }
        } = config;

        const modifiedConfig = {
            ...config,
            module: {
                ...module,
                rules: [...(module.rules || [])],
            },
        };

        // Add SCSS support. 
        modifiedConfig.module.rules.push({
            test: /\.(s*)css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: [
                path.resolve(__dirname, '../src/'),
                path.resolve(__dirname, '../src/components/'),
                path.resolve(__dirname, '../src/pages/')
            ],
        });

        return modifiedConfig;
    },
};