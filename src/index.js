const express=require('express');
const bodyparser=require('body-parser');
const {PORT,SYNC_DB}=require('./config/serverConfig.js');
const {Airport, City}=require('./models/index');
const db = require('./models/index');
const apiRoutes=require('./routes/index');
const serverSetup = async() => {

    const app=express();
    
    app.use(bodyparser.json());
    // app.use(express.json());
    app.use(bodyparser.urlencoded({extended: true}));
    
    app.use('/api',apiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at PORT ${PORT}`);
    });

    if(SYNC_DB=='true')
    {
        db.sequelize.sync({alter:true});
    }
    // db.sequelize.sync({alter:true});
    // const city= await City.findOne({
    //     where:{
    //         id: 5
    //     }
    // })
    // const airports= await city.getAirports();
    // console.log(airports);
    // const airports= await Airport.findAll({
    //     include:{
    //         model: City
    //     }
    // });
    // console.log(airports);
}
serverSetup();
