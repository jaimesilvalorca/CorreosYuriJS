import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Departamento from './departamento.models.js';
import Empleados from './empleados.models.js';

class Cargo extends Model { }

Cargo.init(
  {
    RUT_EMPLEADO: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: Empleados,
        key: 'rut',
      },
    },
    NOMBRE: {
      type: DataTypes.STRING,
    },
    DEPARTAMENTO_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Departamento',
        key: 'ID',
      },
    },
  },
  {
    sequelize: db,
    tableName: 'Cargo',
    timestamps: false,
  }
);

Cargo.belongsTo(Departamento, { foreignKey: 'DEPARTAMENTO_ID', as: 'departamento' });

export default Cargo;