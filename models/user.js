const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Update with your configuration path

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensures name is not an empty string
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensures valid email format
    },
  },
  age: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0, // Age must be a positive number
    },
  },
}, {
  tableName: 'users', // Define the table name
  timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  paranoid: true, // Adds a `deletedAt` field for soft deletes
  underscored: true, // Uses snake_case for column names in the database
});

module.exports = User;
