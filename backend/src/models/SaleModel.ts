import * as Sequelize from "sequelize";

export interface SaleAttributes {
	id?: number;
	client: string | number;
	status: "PAID" | "NOT PAID";
	paymentDate?: string;
}

export interface SaleInstance extends Sequelize.Instance<SaleAttributes> {}

export interface SaleModel
	extends Sequelize.Model<SaleInstance, SaleAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): SaleModel => {
	const Sale: SaleModel = sequelize.define(
		"Sale",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			status: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			paymentDate: {
				type: DataTypes.TEXT,
				allowNull: true
			}
		},
		{
			tableName: "sales"
		}
	);

	Sale.associate = (models): void => {
		Sale.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false,
				field: "client",
				name: "client"
			}
		});
	};

	return Sale;
};
