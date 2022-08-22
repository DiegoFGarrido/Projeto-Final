const proxy = [
  {
    context: '/app',
    target: 'http://localhost:3000',
    pathRewrite: {'^/app' : ''}
  }
];
module.exports = proxy;
