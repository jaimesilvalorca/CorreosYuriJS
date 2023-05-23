import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class Comuna extends Model {}

Comuna.init({
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
  nombre_comuna: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cod_comuna: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'Comuna',
  timestamps: false
});

export default Comuna;
