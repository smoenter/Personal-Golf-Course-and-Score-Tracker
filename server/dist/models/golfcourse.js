import { DataTypes, Model } from 'sequelize';
export class GolfCourse extends Model {
}
export function GolfCourseFactory(sequelize) {
    GolfCourse.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        architectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'GolfCourse',
    });
    return GolfCourse;
}
