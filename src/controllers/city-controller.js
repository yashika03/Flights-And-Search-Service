const {CityService}=require('../services/index');
const cityservice =new CityService();
const parse = require('parse');
// PUT->/city
const create= async (req,res)=>{
    try {
        const city=await cityservice.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'City created successfully',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err:error
        });
    }
}


const createAll = async (req,res) => {
    try {
        console.log(req.body);
        // return true;
        const response=await cityservice.createAllCities(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'City created successfully',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err:error
        });
    }
}

//DELETE->/city/:id
const destroy= async (req,res)=>{
    try {
        const response= await cityservice.deleteCity(req.params.id);
        return res.status(200).json(
            {
                data:response,
                success: true,
                message: 'Successfully deleted a city',
                error:{}
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a city',
            err:error
        });
    }
}

// PATCH->/city/:id
const update=async (req,res)=>{
    try {
        const city = await cityservice.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully updated the city details',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a city',
            err:error
        });
    }
}

// GET->/city/:id
const get= async (req,res)=>{
    try {
        const city = await cityservice.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully got the city details',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err:error
        });
    }
}

// GET->/city
const getAll=async (req,res)=>{
    try {
        const cities = await cityservice.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            message: 'Fetched all the cities successfully',
            success: true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all the cities',
            err:error
        });
    }
}



const getAllAirports= async(req,res) => {
    try {
        const airports= await cityservice.getAllAirports(req.params.id);
        return res.status(200).json({
            data: airports,
            message: 'Fetched all the airports successfully',
            success: true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all the airports',
            err:error
        });
    }
}

module.exports= {
    create,
    destroy,
    update,
    get,
    getAll, 
    createAll,
    getAllAirports
}