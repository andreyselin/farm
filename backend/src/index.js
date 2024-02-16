const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());

const animals = [];

app.get('/list', (req, res) => {
  res.json(animals);
});

app.get('/add', (req, res) => {
  const name = req.query.name;

  const isAbleToAdd = !animals.some(el => el.name === name);
  if (!isAbleToAdd) {
    res.status(409).json({ message: 'This animal is already in list' });
    return;
  }

  animals.push({ name });
  res.json(animals);
});

app.get('/remove', (req, res) => {
  const name = req.query.name;

  const index = animals.findIndex(el => el.name === name);
  if (index === -1) {
    res.status(404).json({ message: 'Can not find such animal' });
    return;
  }

  animals.splice(index, 1);
  res.json(animals);
});

const port = 3008;
app.listen(port, () => {
  console.log(`Farm backend listening on port ${port}`);
});
