import "dotenv/config";
import app from "./app";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Running as http://localhost:${PORT}`);
});