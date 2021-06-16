var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'd82a369quuois7',
    'rivysofwimunzj',
    'e757f288b8d6ce4e0babed26c8ac9d2b417c272bd83f443585995636786985d0',
    {
        host: 'ec2-54-228-139-34.eu-west-1.compute.amazonaws.com',
        port: '5432',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
);
module.exports = sequelize;