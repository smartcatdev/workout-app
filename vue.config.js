// vue.config.js
module.exports = {
    pwa: {
        manifestOptions: {
            display: 'fullscreen'
        }
    },
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    },
}
