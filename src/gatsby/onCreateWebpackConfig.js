const path = require('path')

module.exports = actions => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../components/'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    }
  })
}