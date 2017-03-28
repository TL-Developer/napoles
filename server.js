var http = require('http')
  , express = require('express')
  , app = express();

app.use(express.static('./public'));

http.createServer(app).listen('3000', function(){
  console.log('site napoles rodando na porta 3000');
});
