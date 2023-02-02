const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');


class FlightService{
    
    constructor()
    {
        this.flightRepository=new FlightRepository();
        this.airplaneRepository=new AirplaneRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error: 'Arrival Time cannot be less than the departure time'}
            }
            const airplane= await this.airplaneRepository.getAirplanes(data.airplaneId);
            const flight= await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }

    
    async getFlight(flightId)
    {
        try {
            const flight=await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }

    async getAllFlights(data)
    {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }


    async updateFlights(flightId, data)
    {
        try {
            const response = await this.flightRepository.updateFlights(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }
}

module.exports=FlightService;