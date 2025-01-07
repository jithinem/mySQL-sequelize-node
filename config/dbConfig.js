const { Sequelize } = require('sequelize');

// Change the dialect to 'mysql' and update credentials as needed
const sequelize = new Sequelize('users', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Changed to MySQL
  logging: console.log,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the MySQL database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
