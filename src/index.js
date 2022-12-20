const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverConfig.js');


const serverSetup = async() => {
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.listen(PORT,async ()=>{
        console.log(`Server started at PORT ${PORT}`);
    })
}
serverSetup();
