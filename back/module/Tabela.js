import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Tabela = sequelize.define('Tabela', {
    // CREATE SEQUENCE id_teste START WITH 1 INCREMENT BY 1;
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_teste')")
    },
},
    {
        freezeTableName: true,
        tableName: "EPIs",
        timestamps: false
    }
)

export default Tabela