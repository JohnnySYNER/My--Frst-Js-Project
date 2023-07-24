const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectToDatabase = require('./config/db.js');
const UserModel = require('./models/user.js');
const cors = require('cors');
app.use(cors());

// Connect to the database and start the server
connectToDatabase().then(() => {
  app.use(express.json()); //  Middleware to parse incoming JSON data

  // POST route to handle form data from the user
  app.post('/submit-User-Form', async (req, res) => {
    const formUserData = req.body;
    if (formUserData.userName && formUserData.email && formUserData.password) {
      try {
        const newUser = new UserModel({
          username: formUserData.userName,
          email: formUserData.email,
          password: formUserData.password,
        });

        // Saving the user data to the database
        await newUser.save();
        console.log('User data saved successfully.');

        res.status(200).json({ message: 'Data saved successfully.' });
      } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ error: 'An error occurred while saving the data.' });
      }
    } else {
      console.log('Missing required fields');
      res.status(400).json({ error: 'Missing required fields.' });
    }
  });

  // Start the server on port 3000
  app.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });
});
