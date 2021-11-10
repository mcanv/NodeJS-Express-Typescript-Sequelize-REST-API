import {Sequelize, SequelizeOptions} from "sequelize-typescript";
import Post from "../models/Post";
import Category from "../models/Category";

const DatabaseConfig: SequelizeOptions = {
    database: "ts_app",
    username: "root",
    dialect: "mysql",
    password: "",
    storage: ':memory:',
    logging: false
}

const Database = new Sequelize(DatabaseConfig);

Database.addModels([Post, Category]);

export default Database;