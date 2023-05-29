import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class CargasFamiliares extends Model {}

CargasFamiliares.init(
  {
    RUT_EMPLEADO: {
      type: DataTypes.STRING(12),
      primaryKey: true,
      references: {
        model: Empleados,
        key: 'rut'
      }
    },
    NOMBRE_CARGA: {
      type: DataTypes.STRING(100)
    },
    PARENTESCO: {
      type: DataTypes.STRING(50)
    },
    SEXO: {
      type: DataTypes.STRING(1)
    },
    RUT_CARGA: {
      type: DataTypes.STRING(12)
    }
  },
  {
    sequelize: db,
    tableName: 'CargasFamiliares',
    timestamps: false
  }
);

CargasFamiliares.belongsTo(Empleados, { foreignKey: 'RUT_EMPLEADO', as: 'FK_CARGAS_FAMILIARES_EMPLEADO' });

export default CargasFamiliares;
