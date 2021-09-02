require('source-map-support').install()
require('ts-node').register({compilerOptions: {esModuleInterop: true}})

require = require('esm')(module)

const {runMigration, getSiteData} = require('./src/tools/publish/run')

runMigration()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['@snek-at/jaen-pages']
      }
    }
  ]
}
