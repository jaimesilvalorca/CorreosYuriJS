import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Comuna from './comuna.models.js';

class Ciudad extends Model {}

Ciudad.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100)
    },
    COMUNA_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Comuna,
        key: 'ID'
      }
    }
  },
  {
    sequelize: db,
    tableName: 'Ciudad',
    timestamps: false
  }
);

Ciudad.belongsTo(Comuna, { foreignKey: 'COMUNA_ID', as: 'FK_CIUDAD_COMUNA' });

export default Ciudad;
