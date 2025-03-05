import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface ArchitectAttributes {
    id: number;
    name: string;
}

interface ArchitectCreationAttributes extends Optional<ArchitectAttributes, 'id'> {}

export class Architect extends Model<ArchitectAttributes, ArchitectCreationAttributes> implements ArchitectAttributes {
    public id!: number;
    public name!: string;
}

export function ArchitectFactory(sequelize: Sequelize): typeof Architect {
Architect.init(
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
        modelName: 'Architect',
    }
);
return Architect;
}
