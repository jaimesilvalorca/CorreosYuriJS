import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';

class Empleados extends Model {}

Empleados.init({
  rut: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  area: {
    type: DataTypes.STRING,
    allowNull: true
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'empleados',
  timestamps: false
});

export default Empleados;