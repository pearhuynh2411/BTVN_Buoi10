import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "food_app",
    "root",
    "123456",
    {
        host: "localhost",
        port: 3305,
        dialect: "mysql"
    }
);

export default sequelize;