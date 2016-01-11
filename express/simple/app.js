var app = require('express')(),
    port = process.env.PORT || 3000;

app.get('/hello', function (req, res) {
  res.send('<h1>hello</h1>')
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port);
