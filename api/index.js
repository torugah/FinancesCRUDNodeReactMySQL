import express  from "express";
import registrosRoutes from "./routes/registros.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", registrosRoutes);

app.listen(8800);