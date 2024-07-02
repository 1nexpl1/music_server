const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Song = sequelize.define('song', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull:false},
    link: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    Song
}