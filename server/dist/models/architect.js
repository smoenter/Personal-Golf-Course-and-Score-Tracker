import { DataTypes, Model } from 'sequelize';
export class Architect extends Model {
}
export function ArchitectFactory(sequelize) {
    Architect.init({
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
        modelName: 'Architect',
    });
    return Architect;
}
