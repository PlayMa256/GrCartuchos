import * as Sequelize from "sequelize";

export interface SupplierAttributes {
	id: number;
	name: string;
}

export interface SupplierInstance
	extends Sequelize.Instance<SupplierAttributes> {}

export interface SupplierModel
	extends Sequelize.Model<SupplierInstance, SupplierAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): SupplierModel => {
	return sequelize.define(
		"Supplier",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING
			}
		},
		{
			tableName: "supplier"
		}
	);
};
