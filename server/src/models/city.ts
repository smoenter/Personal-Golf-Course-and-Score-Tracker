import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CityAttributes {
    id: number;
    name: string;
}

interface CityCreationAttributes extends Optional<CityAttributes, 'id'> {}

export class City extends Model<CityAttributes, CityCreationAttributes> implements CityAttributes {
    public id!: number;
    public name!: string;
}

export function CityFactory(sequelize: Sequelize): typeof City {
City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'City',
    }
);
return City;
}