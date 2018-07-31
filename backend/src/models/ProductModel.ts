import * as Sequelize from "sequelize";

export interface ProductAttributes {
	id: number;
	name: string;
	date: string;
}

export interface ProductInterface
	extends Sequelize.Instance<ProductAttributes> {}

export interface ProductModel
	extends Sequelize.Model<ProductInterface, ProductAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): ProductModel => {
	return sequelize.define(
		"Product",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING
			},
			date: {
				type: DataTypes.DATE
			}
		},
		{
			tableName: "product"
		}
	);
};
