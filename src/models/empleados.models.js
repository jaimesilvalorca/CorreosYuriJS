import { Model, DataTypes, DatabaseError } from 'sequelize';
import db from '../config/db.config.js';

class Empleados extends Model {}
Empleados.init(
  {
    rut: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull:true
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING(12),
      allowNull: true,
      references: {
        model: 'Genero',
        key: 'RUT_EMPLEADO',
      },
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'Cargo',
        key: 'RUT_EMPLEADO',
      },
    },
    salario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Region',
        key: 'ID',
      },
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: 'Empleados',
    timestamps: false,
  }
);

export default Empleados;