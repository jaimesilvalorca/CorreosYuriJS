import { Sequelize } from "sequelize";
import configEnv from "./env.config.js";

const{database,username,password,host} = configEnv;

const db = new Sequelize(database,username,password,{
    host: host,
    dialect: 'mariadb'
})

export default db;