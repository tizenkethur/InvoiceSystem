import app from "./app";
import { db } from "./data/connection";

const PORT = process.env["PORT"] || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

db.checkConnection();
