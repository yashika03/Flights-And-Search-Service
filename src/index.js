const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverConfig.js');

const db = require('./models/index');
const apiRoutes=require('./routes/index');
const serverSetup = async() => {

    const app=express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    
    app.use('/api',apiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at PORT ${PORT}`);
    });
}
serverSetup();
