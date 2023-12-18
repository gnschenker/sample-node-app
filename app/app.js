const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'dbuser',
  host: 'db',
  database: 'mydb',
  password: 'dbpassword',
  port: 5432,
});

app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).json({ "message": "Hello world!" });
});

app.get('/users', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.json(rows);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.json(rows[0]);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const { rows } = await pool.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email]);
  res.status(201).json(rows[0]);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
