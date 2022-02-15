module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es.promise',
        'web.url',
        'web.url-search-params'
      ]
    }]
  ]
}
