import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class Location extends Model {
    public id!: number;
    public name!: string;
    public geom!: any;
}

Location.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        geom: {
            type: DataTypes.GEOMETRY,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'locations'
    }
);

async function sync() {
    await Location.sync();
    console.log('SYNCED');
}

sync();

export default Location;