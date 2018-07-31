import * as Sequelize from "sequelize";

export interface SellAttributes {
	id?: number;
	client: string;
	product: string;
	quantity: number;
	price: string;
	date: string;
	status: "PAID" | "NOT PAID";
	paymentDate?: string;
}

export interface SellInstance extends Sequelize.Instance<SellAttributes> {}

export interface SellModel
	extends Sequelize.Model<SellInstance, SellAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): SellModel => {
	const Sell: SellModel = sequelize.define(
		"Sell",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			quantity: {
				type: DataTypes.DECIMAL,
				allowNull: false
			},
			price: {
				type: DataTypes["DOUBLE"],
				allowNull: false
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false
			},
			status: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			paymentDate: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		},
		{
			tableName: "sells"
		}
	);

	Sell.associate = (models): void => {
		Sell.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false,
				field: "client",
				name: "client"
			}
		});
		Sell.belongsTo(models.Product, {
			foreignKey: {
				allowNull: false,
				field: "product",
				name: "product"
			}
		});
	};

	return Sell;
};
