import { DataTypes, Model } from 'sequelize';
export class City extends Model {
}
export function CityFactory(sequelize) {
    City.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'City',
    });
    return City;
}
