// app.js
const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
