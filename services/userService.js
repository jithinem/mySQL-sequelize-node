const User = require('../models/user');

class UserService {
  async createUser(data) {
    console.warn(data,"dataa");
    
    return User.create(data);
  }

  async getAllUsers() {
    return User.findAll();
  }

  async getUserById(id) {
    return User.findByPk(id);
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user.update(data);
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user.destroy();
  }
}

module.exports = new UserService();
