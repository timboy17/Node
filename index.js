const express = require('express');
const app = express();
//Put all of you files in the /public folder
app.use(express.static(__dirname + '/public'));
//404
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/404.html');
});

app.listen(3000, () => {
  console.log('Server started!');
});
