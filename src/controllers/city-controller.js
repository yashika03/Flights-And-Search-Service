const {CityService}=require('../services/index');
const cityservice =new CityService();

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

// DELETE->/city/:id
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
const get=(req,res)=>{
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

module.exports={
    create,
    destroy,
    update,
    get
}