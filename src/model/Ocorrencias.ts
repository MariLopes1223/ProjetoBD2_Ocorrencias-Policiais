import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class Ocorrencias extends Model {
    public id!: number;
    public titulo!: string;
    public tipo!: string;
    public data!: Date;
    public geom!: any;
}

Ocorrencias.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
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
    await Ocorrencias.sync();
    console.log('SYNCED');
}

sync();

export default Ocorrencias;