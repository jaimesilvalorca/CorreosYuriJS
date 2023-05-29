import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Empleados from './empleados.models.js';

class ContactosEmergencia extends Model {}

ContactosEmergencia.init(
  {
    RUT_EMPLEADO: {
      type: DataTypes.STRING(12),
      primaryKey: true,
      references: {
        model: Empleados,
        key: 'rut'
      }
    },
    NOMBRE_CONTACTO: {
      type: DataTypes.STRING(100)
    },
    RELACION: {
      type: DataTypes.STRING(50)
    },
    TELEFONO: {
      type: DataTypes.STRING(20)
    }
  },
  {
    sequelize: db,
    tableName: 'ContactosEmergencia',
    timestamps: false
  }
);

ContactosEmergencia.belongsTo(Empleados, { foreignKey: 'RUT_EMPLEADO', as: 'FK_CONTACTOS_EMERGENCIA_EMPLEADO' });

export default ContactosEmergencia;

