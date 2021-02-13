"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable("OrderDetails", {
			orderId: {
				type: DataTypes.INTEGER,
				unique: "uniqueIndex",
				allowNull: false,
			},
			productId: {
				type: DataTypes.INTEGER,
				unique: "uniqueIndex",
				allowNull: false,
			},
			createdOn: DataTypes.DATE,
			updatedOn: DataTypes.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
    return queryInterface.dropTable("OrderDetails");
	}
};
