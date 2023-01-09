const {Airplane} = require('../models/index');
class AirplaneRepository{
    async getAirplanes(id)
    {
        try {
            const airplane= await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Error in the City Repository Layer");
            throw{error};
        }
    }
}


module.exports=AirplaneRepository;