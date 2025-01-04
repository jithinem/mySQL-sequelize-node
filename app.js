const express = require('express');
const sequelize = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    // Force sync the database (ensure this is safe for your environment)
    await sequelize.sync({ force: true }); 
    console.log("Database synced");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
