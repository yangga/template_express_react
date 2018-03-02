var express = require('express');

console.log('NODE_ENV', process.env['NODE_ENV'])


const app = express();

if (process.env['NODE_ENV'] === 'development'){
  // 개발 환경에서 CORS(Cross Origin Resource Sharing) 허용하기
  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
}

// api 라우터 설정
app.use('/api/coin', require('./routes/coin'));

// client 라우터 설정
if (process.env['NODE_ENV'] !== 'development'){
  var middleware = require('./middleware');
  
  // Expose the public directory as /dist and point to the browser version
  app.use('/dist', express.static(__dirname + '/../app'));

  // Anything unresolved is serving the application and let
  // react-router do the routing!
  app.get('/*', middleware);
}

// // Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 50000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
