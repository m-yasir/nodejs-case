"use strict";
const { Sequelize, DataTypes } = require("sequelize");
/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "OrderDetail",
    {
      orderId: {
        type: DataTypes.INTEGER,
        unique: "uniqueIndex",
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        unique: "uniqueIndex",
        allowNull: false
      },
      createdOn: DataTypes.DATE,
      updatedOn: DataTypes.DATE,
    },
    {
      tableName: "OrderDetails",
      timestamps: true,
      createdAt: "createdOn",
      updatedAt: "updatedOn"
    }
  );
  OrderDetail.associate = function(models) {
    // associations can be defined here
    // OrderDetail.belongsTo(models.Category, { foreignKey: "orderId" });
    // OrderDetail.belongsTo(models.Article, { foreignKey: "productId" });
  };
  return OrderDetail;
};
