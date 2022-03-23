const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "Database_kid_helped";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})
//////////////////////////////////////////////////////////////////////
//Models

const usuarioModelo = require("../Models/usuario")
const proyectoModelo = require("../Models/proyecto")
const progresoModelo = require("../Models/progreso")
const experienciaModelo = require("../Models/experiencia") 
const enseñanzaModelo = require("../Models/enseñanza")
const actividadesModelo = require("../Models/actividades")
const clasificacionesModelo = require("../Models/clasificacion")

/////////////////////////////////////////////////////////////////////
const sequelize = new Sequelize(
  'Database_kid_helped',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })
/////////////////////////////////////////////////
//Sincronizacion
const usuario = usuarioModelo(sequelize, Sequelize) 
const proyecto = proyectoModelo(sequelize, Sequelize)
const progreso = progresoModelo(sequelize,Sequelize)
const experiencia = experienciaModelo(sequelize, Sequelize)
const enseñanza = enseñanzaModelo( sequelize, Sequelize)
const actividad = actividadesModelo(sequelize, Sequelize) 
const clasificacion = clasificacionesModelo(sequelize, Sequelize)

//////////////////////////////////////////////////
//relations
usuario.hasMany(proyecto)
proyecto.belongsTo(usuario)

usuario.hasMany(progreso)
progreso.belongsTo(usuario)

usuario.hasMany(experiencia)
experiencia.belongsTo(usuario)

usuario.hasMany(enseñanza)
enseñanza.belongsTo(usuario)

usuario.hasMany(actividad)
actividad.belongsTo(usuario)

usuario.hasMany(clasificacion)
clasificacion.belongsTo(usuario)


/////////////////////////////////////////////////
//exports
module.exports = {
  usuario,
  proyecto,
  progreso,
  experiencia,
  enseñanza,
  actividad,
  clasificacion

}