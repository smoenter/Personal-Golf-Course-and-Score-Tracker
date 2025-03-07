import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface goldcourseAttributes {
    id: number;
    cityId: number | any;
    name: string;
    address: string;
    architectId: number;
}


interface GolfCourseCreationAttributes extends Optional<goldcourseAttributes, 'id'> {}

export class GolfCourse extends Model<goldcourseAttributes, GolfCourseCreationAttributes> implements goldcourseAttributes {
    public id!: number;
    public cityId!: number;
    public name!: string;
    public address!: string;
    public architectId!: number;
}

export function GolfCourseFactory(sequelize: Sequelize): typeof GolfCourse {
GolfCourse.init(
    {
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
    },
    {
        sequelize,
        modelName: 'GolfCourse',
    }
);
return GolfCourse;
}