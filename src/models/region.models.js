import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';
import Ciudad from './ciudad.models.js';

class Region extends Model {}

Region.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100)
    },
    CIUDAD_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Ciudad,
        key: 'ID'
      }
    }
  },
  {
    sequelize: db,
    tableName: 'Region',
    timestamps: false
  }
);

Region.belongsTo(Ciudad, { foreignKey: 'CIUDAD_ID', as: 'FK_REGION_COMUNA' });

export default Region;
