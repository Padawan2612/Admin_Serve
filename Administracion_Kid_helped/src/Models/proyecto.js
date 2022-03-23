const proyecto =(sequelize, type) =>{
    return sequelize.define('proyectos', {
        idProyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING(2500),
        mision: type.STRING,
        vision: type.STRING,      
        creacionProyectos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProyectos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = proyecto