// vue.config.js
module.exports = {
    pwa: {
        display: 'fullscreen'
    },
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    },
}
