import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { globalErrors } from "./errors";
import router from "./routes/routes";

// INSTANCE EXPRESS
const app = express();

app.use(cors());
app.use(json());

// ROUTES
app.use("/api", router)


// ERROS
app.use(globalErrors);

export default app;
