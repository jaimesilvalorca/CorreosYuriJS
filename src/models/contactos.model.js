import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class Contactos extends Model {}

Contactos.init({
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
  nombre_contacto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  relacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'contactos_emergencia',
  timestamps: false
});

export default Contactos;
