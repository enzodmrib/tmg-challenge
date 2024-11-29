import { app } from "./app"

const PORT = 8080

app.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`)
})
