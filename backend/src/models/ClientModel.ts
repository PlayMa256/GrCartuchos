import * as Sequelize from "sequelize";

export interface ClientAttributes {
	id: number;
	name: string;
	cnpj?: string;
	ie?: string;
}

export interface ClientInstance extends Sequelize.Instance<ClientAttributes> {}

export interface ClientModel
	extends Sequelize.Model<ClientInstance, ClientAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): ClientModel => {
	return sequelize.define(
		"Client",
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
			cnpj: {
				type: DataTypes.STRING
			},
			ie: {
				type: DataTypes.STRING
			}
		},
		{
			tableName: "client"
		}
	);
};
