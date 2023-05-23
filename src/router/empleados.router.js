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
      const empleadosRender = empleado ? empleado.dataValues : null;
      console.log(empleadosRender);
      res.render('list', { empleados: empleadosRender });
    } catch (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error al obtener los datos de empleados' });
    }
  });




export default router

