const {FlightService} = require('../services/index');
const flightService = new FlightService();

const {SuccessCodes} = require('../utils/error-codes');

const create = async (req,res)  => {
    try {
        const flightData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight= await flightService.createFlight(flightData);
        res.status(SuccessCodes.CREATED).json({
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
        const flight= await flightService.getFlight(req.params.id);
        res.status(SuccessCodes.OK).json({
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

const update = async(req,res) => {
    try {
        const response = await flightService.updateFlights(req.params.id, req.body);
        res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flights with required data'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight data',
            err:error
        });
    }
}


module.exports={
    create,
    get,
    getAll,
    update
}