require('dotenv').config();

const express = require('express');
const app = express();

const indexRouter = require('./routes/index.routes');

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(app.get('port'), () => {
  console.log('listening on port ' + app.get('port'));
});
