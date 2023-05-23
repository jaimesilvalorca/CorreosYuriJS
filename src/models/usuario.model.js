import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class Usuario extends Model {}

Usuario.init({
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
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: true
  },
  perfil: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'Usuarios',
  timestamps: false
});

export default Usuario;
