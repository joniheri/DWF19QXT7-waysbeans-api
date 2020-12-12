'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true, // for soft delee
    modelName: 'Post', // --> this 'post' is name of tabel in database
  });
  return Post;
};