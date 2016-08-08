var util = require('util');

module.exports = function() {
  return function* (next) {
    try {
      yield* next;
    } catch (err) {
      console.log('koa-pg-error: this.req.headers[\'x-platform\'] = ' + this.req.headers['x-platform']);
      console.log('koa-pg-error: this.req.headers.authorization = ' + this.req.headers.authorization);
      console.log('koa-pg-error: this.request.method = ' + this.request.method);
      console.log('koa-pg-error: this.request.path = ' + this.request.path);
      console.log('koa-pg-error: this.request.query = ' + util.inspect(this.request.query));
      console.log('koa-pg-error: this.request.body = ' + util.inspect(this.request.body));

      throw err;
    }
  };
};
