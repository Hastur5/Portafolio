import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'railway', // Nombre DB
  'postgres', // Usuario
  'aSJScGPXSvyrLRAcMF2I', // Contraseña
  {
    host: 'containers-us-west-57.railway.app',
    port: '7693',
    dialect: 'postgres'
  }
)
