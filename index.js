require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const labelDataRoutes = require('./routes/labelDataRoutes');
require('./connection/conn');

const port = process.env.PORT || 3000;
app.use(cors());
// 

// Middleware
app.use(express.json());

app.use('/api', labelDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
