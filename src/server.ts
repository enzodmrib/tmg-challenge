import { app } from "./app"
import dotenv from 'dotenv';
import { env } from "./env";

dotenv.config();

const PORT = env.API_PORT

app.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`)
  console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
})
