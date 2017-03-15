module.exports = function(logger) {
  return function* (next) {
    if (typeof logger === 'function') {
      logger = logger(this);
    } else {
      logger = logger || console;
    }
    try {
      yield* next;
    } catch (err) {
      const requestDebugInfo = {
        auth: this.headers.authorization,
        requestMethod: this.request.method,
        requestPath: this.request.path,
        requestQuery: this.request.query,
        requestBody: this.request.body
      };
      logger.error({ requestDebugInfo, err }, 'koa-log-req-on-error: request encountered an error');

      throw err;
    }
  };
};
