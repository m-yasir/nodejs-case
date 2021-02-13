'use strict';
const { Sequelize, DataTypes } = require("sequelize");
/**
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: "uniqueIndex",
        autoIncrement: true
      },
      customerId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      createdOn: DataTypes.DATE,
      updatedOn: DataTypes.DATE,
    }, {
      tableName: "Orders",
      timestamps: true,
      createdAt: "createdOn",
      createdAt: "updatedOn",
      updatedAt: false
    }
  );
  Order.associate = (models) => {
      // associations can be defined here
    // Admin.belongsTo(models.User, {foreignKey: "userId"});
};
  return Order;
};