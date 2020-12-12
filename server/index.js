const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

const mongoose = require('mongoose');
mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongoDB connected..'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log('3000 connect');
  console.log(`Example app listening at http://localhost:${port}`);
});
