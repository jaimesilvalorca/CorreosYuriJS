import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class Genero extends Model {}

Genero.init(
  {
    RUT_EMPLEADO: {
      type: DataTypes.STRING(12),
      primaryKey: true,
      references: {
        model: Empleados,
        key: 'rut',
      },
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
    },
  },
  {
    sequelize: db,
    tableName: 'Genero',
    timestamps: false,
  }
);

Genero.belongsTo(Empleados, { foreignKey: 'RUT_EMPLEADO', as: 'empleado', targetKey: 'rut', hooks: true });

export default Genero;

