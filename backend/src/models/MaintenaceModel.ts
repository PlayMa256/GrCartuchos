import * as Sequelize from "sequelize";

export interface MaintenanceAttributes {
	id?: number;
	client: string;
	supplier: string;
	product: string;
	date: string;
	comment?: string;
}

export interface MaintenaceInstance
	extends Sequelize.Instance<MaintenanceAttributes> {}

export interface MaintenanceModel
	extends Sequelize.Model<MaintenaceInstance, MaintenanceAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): MaintenanceModel => {
	const Maintenance: MaintenanceModel = sequelize.define(
		"Maintenance",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false
			},
			comment: {
				type: DataTypes.TEXT,
				allowNull: true
			}
		},
		{
			tableName: "maintenances"
		}
	);

	Maintenance.associate = (models): void => {
		Maintenance.belongsTo(models.Client, {
			foreignKey: {
				allowNull: false,
				field: "client",
				name: "client"
			}
		});

		Maintenance.belongsTo(models.Supplier, {
			foreignKey: {
				allowNull: false,
				field: "supplier",
				name: "supplier"
			}
		});

		Maintenance.belongsTo(models.Product, {
			foreignKey: {
				allowNull: false,
				field: "product",
				name: "product"
			}
		});
	};

	return Maintenance;
};
