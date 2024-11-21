const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();

// Database connection
const pool = new Pool({
  user: 'neondb_owner',
  host: 'localhost',
  database: 'neondb',
  password: 'gHaX06lvKbMQ',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// API routes (already defined in your code)

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
