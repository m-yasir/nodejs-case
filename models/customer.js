'use strict';
const { Sequelize, DataTypes } = require("sequelize");
/**
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING(255)
    }, {
      tableName: "Customers",
      timestamps: false
    }
  );
  Customer.associate = (models) => {
    // Customer.belongsTo(models.User, { foreignKey: "userId" });
    // associations can be defined here
  };
  return Customer;
};
