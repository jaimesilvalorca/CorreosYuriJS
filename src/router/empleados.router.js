import { Router } from "express";
import Empleados from "../models/empleados.models.js";

const router = Router()

// router.get('/',(req,res)=>{
//     console.log("router listo")
//     res.send("Ok!")
// })

router.get('/create',(req,res)=>{
    res.render('create',{})
})

router.post('/',async (req,res)=>{
    const empleadosData = req.body
    try {
        const empleado = await Empleados.create(empleadosData)
        res.status(200)
        return res.redirect('/api/empleados/create')
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Error al crear el dato en la base de datos'})
        
    }
})

router.get('/rut/:rut',async(req,res)=>{
    const rut = req.params.rut
    console.log(rut)
    const empleados = await Empleados.findOne({where:{rut}})
    console.log(JSON.stringify(empleados))    
})

router.get('/nombre/:nombre',async(req,res)=>{
    const nombre = req.params.nombre
    console.log(nombre)
    const empleados = await Empleados.findOne({where:{nombre}})
    console.log(JSON.stringify(empleados))    
    
})

router.get('/list', async (req, res) => {
    const nombre = 'Jaime';
    try {
      const empleado = await Empleados.findOne({ where: { nombre } });
      console.log(empleado);
      const empleadoDataValues = empleado.dataValues
      res.render('list', { empleadoDataValues });
    } catch (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error al obtener los datos de empleados' });
    }
  });

  router.get('/listAll', async (req, res) => {
    try {
      const empleados = await Empleados.findAll();
      empleados.forEach(empleado => {
        console.log(empleado.dataValues);
      });
      res.send(empleados); // Opcional: enviar la lista de empleados como respuesta al cliente
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al obtener la lista de empleados');
    }
  });




export default router

