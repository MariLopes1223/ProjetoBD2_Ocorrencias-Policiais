import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class Ocorrencia extends Model {
    public id!: number;
    public name!: string;
    public geom!: any;
}

Ocorrencia.init(
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
        tableName: 'ocorrencias'
    }
);

async function sync() {
    await Ocorrencia.sync();
    console.log('SYNCED');
}
sync();

export default Ocorrencia;