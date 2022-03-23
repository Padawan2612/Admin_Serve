const enseñanza =(sequelize, type) =>{
    return sequelize.define('enseñanzas', {
        idProyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        video: type.STRING,
        descripcion: type.STRING(2500),
           
        creacionEnseñanzas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionEnseñanzas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = enseñanza