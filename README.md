# koa-log-req-on-err

Log request details upon error.  This includes X-Platform header, Authorization header, method, path, query, and body.

## usage

```javascript
var logReqOnErr = require('koa-log-req-on-err');

app.use(error()); // koa-error
app.use(logReqOnErr())); // when an error occurs, logs request details
app.use(function* () {
  // do something with koa
});
```
