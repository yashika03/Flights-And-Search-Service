const {FlightService} = require('../services/index');
const flightService = new FlightService();

const create = async (req,res)  => {
    try {
        const flight= await flightService.createFlight(req.body);
        res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the flight',
            err:error
        });
    }
}

const get = async (req, res) => 
{
    try {
        const flight= await flightService.getFlight(req.body);
        res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight',
            err:error
        });
    }
}


const getAll = async(req,res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        res.status(201).json({
            data: flights,
            success: true,
            err: {},
            message: 'Successfully fetched the flights with required data'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight data',
            err:error
        });
    }
}

module.exports={
    create,
    get,
    getAll
}