module.exports = function( api ) {
  api.cache( true )
  return {
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: ['src']
        }
      ]
    ],
    presets: ['babel-preset-expo'],
  }
}
