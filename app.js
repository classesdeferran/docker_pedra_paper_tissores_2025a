const path = require('node:path')
const express = require('express')
const app = express()

process.loadEnvFile()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.use((req, res) => {
    res.status(404).send("Pagina no encontrada")
})

app.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
})