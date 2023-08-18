const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool

// API routes
app.use('/api/auth', authRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  // console.log(db)
  console.log(`Server is running on http://localhost:${port}`);
});
