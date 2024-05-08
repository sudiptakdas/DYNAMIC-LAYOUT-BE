const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://layout:layout123@cluster0.8timiwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Data Base connected'));
