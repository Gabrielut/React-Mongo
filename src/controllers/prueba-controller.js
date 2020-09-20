const pruebaCtrl = {};
pruebaCtrl.obtener= (req, res)=>{
res.send('Funcionando');
};

pruebaCtrl.crear=async(req, res)=>{
   const {nombre,apellido,salario} = req.body;
   const nuevoRegistro = new Empleado({
       nombre,apellido,salario
   });
   await nuevoRegistro.save();
   res.json({
       mensaje: 'Empleado Guardado'
   });
};

pruebaCtrl.actualizar= (req, res)=>{
    res.send('Funcionando actualizar');
};

pruebaCtrl.eliminar= (req, res)=>{
    res.send('Funcionando eliminar');
};
module.exports= pruebaCtrl;