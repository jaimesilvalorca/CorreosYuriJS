import handlebars from "express-handlebars"
import express from "express"
import cors from 'cors'
import db from "./config/db.config.js"
import Cargas from "./models/cargas.models.js"
import Cargo from "./models/cargo.models.js"
import Ciudad from "./models/ciudad.models.js"
import Comuna from "./models/comuna.models.js"
import Contactos from "./models/contactos.model.js"
import Departamento from "./models/departamento.models.js"
import Genero from "./models/genero.models.js"
import Region from "./models/region.models.js"
import Usuario from "./models/usuario.model.js"
import sequelize from "./config/db.config.js"
import Empleados from "./models/empleados.models.js"
import empleadosRouter from "./router/empleados.router.js"



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')
app.use(express.static('./src/public'))

app.use('/api/empleados', empleadosRouter)


async function syncTables() {
    try {
        await db.sync({ alter: true });
        // await Empleados.sync();
        // await Cargo.sync();
        console.log('Tablas sincronizadas con la base de datos.');
        // Continúa con la lógica de tu aplicación aquí
    } catch (error) {
        console.error('Error al sincronizar las tablas:', error);
    }
}
syncTables();


// await Empleados.sync({alter:true})
// await Cargas.sync({alter:true})
// await Comuna.sync({alter:true})
// await Contactos.sync({alter:true})
// await Usuario.sync({alter:true})
// await sequelize.sync({alter:true})

app.listen(3000, () => console.log('Server up'))