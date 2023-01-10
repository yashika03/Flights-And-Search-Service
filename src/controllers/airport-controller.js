const {AirportService} = require('../services/index');
const airportService = new AirportService();


const create = async(req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(200).json({
            data:response,
            success: true,
            err: {},
            message: 'Successfully created the airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            err: error,
            message: 'Could not create the airport'
        });
    }
}  


module.exports={
    create
}