'use strict'
module.exports = {
  pages: {
    pageA: {
      entry: 'src/pages/pageA/app.js',
      template: 'public/index.html',
      title: 'Page A',
      chunks: ['chunk-vendors', 'chunk-common', 'pageA']
    },
    pageB: {
      entry: 'src/pages/pageB/app.js',
      template: 'public/index.html',
      title: 'Page B',
      chunks: ['chunk-vendors', 'chunk-common', 'pageB']
    },
    pageC: {
      entry: 'src/pages/pageC/app.js',
      template: 'public/index.html',
      title: 'Page C',
      chunks: ['chunk-vendors', 'chunk-common', 'pageC']
    },
    pageD: {
      entry: 'src/pages/pageD/app.js',
      template: 'public/index.html',
      title: 'Page D',
      chunks: ['chunk-vendors', 'chunk-common', 'pageD']
    }
  }
}
