const User = require('./User');
const Blogpost = require('./Blogpost');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost };
