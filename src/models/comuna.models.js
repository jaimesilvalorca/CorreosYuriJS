import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config.js';

class Comuna extends Model {}

Comuna.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100)
    }
  },
  {
    sequelize: db,
    tableName: 'Comuna',
    timestamps: false
  }
);

export default Comuna;
