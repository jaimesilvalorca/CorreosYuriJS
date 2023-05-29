import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';


class Departamento extends Model {}

Departamento.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
    },
  },
  {
    sequelize: db,
    tableName: 'Departamento',
    timestamps: false,
  }
);

export default Departamento;
