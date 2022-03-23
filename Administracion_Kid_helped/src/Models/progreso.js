const progreso =(sequelize, type) =>{
    return sequelize.define('progresos', {
        idActividad: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        puntuacion: type.INTEGER,
      
        
        creacionProgreso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProgreso:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = progreso