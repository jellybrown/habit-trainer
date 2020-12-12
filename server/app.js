const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to the database'))
  .catch((err) => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({message: 'welcome to habit-trainer.'});
});

// route
require('./app/routes/habit.routes')(app);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
