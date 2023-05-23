import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class Cargas extends Model {}

Cargas.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: Empleados,
      key: 'rut'
    }
  },
  nombre_carga: {
    type: DataTypes.STRING,
    allowNull: true
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rut_carga: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'Cargas',
  timestamps: false
});

export default Cargas;