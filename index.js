import express from 'express'

const app = express()

app.get('/',  (req, res) => {
  res.send('🚀Hola😎 Mundo🚀')
})

app.listen(8000, () => {
    console.log("El Servidor esta corriendo en http://localhost:8000")
})
