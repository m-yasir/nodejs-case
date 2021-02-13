"use strict";
const { Sequelize, DataTypes } = require("sequelize");
/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "Product",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      createdOn: DataTypes.DATE,
      updatedOn: DataTypes.DATE,
    },
    {
      tableName: "Products",
      timestamps: true,
      createdAt: "createdOn",
      updatedAt: "updatedOn"
    }
  );
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};
