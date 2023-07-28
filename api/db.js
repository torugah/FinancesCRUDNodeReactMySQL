import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "developer",
    password: "1234",
    database: "teste"
});

