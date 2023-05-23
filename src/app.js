import handlebars from "express-handlebars"
import express from "express"
import cors from 'cors'
import Empleados from "./models/empleados.models.js"
import Cargas from "./models/cargas.models.js"
import Comuna from "./models/comuna.models.js"
import Contactos from "./models/contactos.model.js"
import Usuario from "./models/usuario.model.js"
import sequelize from "./config/db.config.js"
import empleadosRouter from "./router/empleados.router.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')
app.use(express.static('./src/public'))

app.use('/api/empleados',empleadosRouter)


await Empleados.sync({alter:true})
await Cargas.sync({alter:true})
await Comuna.sync({alter:true})
await Contactos.sync({alter:true})
await Usuario.sync({alter:true})
await sequelize.sync({alter:true})

app.listen(3000,()=>console.log('Server up'))