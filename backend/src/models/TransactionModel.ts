import * as Sequelize from "sequelize";

export interface TranscationAttributes {
	id?: number;
	client: string;
	value: number;
	date: string;
}

export interface TransactionInstance
	extends Sequelize.Instance<TranscationAttributes> {}

export interface TransactionModel
	extends Sequelize.Model<TransactionInstance, TranscationAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): TransactionModel => {
	const Transaction: TransactionModel = sequelize.define(
		"Transaction",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			date: {
				type: DataTypes.DATE
			}
		},
		{
			tableName: "transactions"
		}
	);

	Transaction.associate = (models): void => {
		Transaction.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false,
				field: "client",
				name: "client"
			}
		});
	};

	return Transaction;
};
