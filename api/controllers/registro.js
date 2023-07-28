import { db } from "../db.js";

export const getRegistos = (_, res) => {
    const q = "SELECT * FROM registros";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}