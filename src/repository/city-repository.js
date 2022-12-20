const {City}=require('../models/index');
class CityRepository{
    async createCity({name})
    {
        try {
            const city= await City.create({
                name
            })
            return city;
        } catch (error) {
            console.log("Error in the City Repository Layer");
            throw{error};
        }
    }
    async deleteCity(cityId)
    {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Error in the City Repository Layer");
            throw{error};
        }
    }
    async updateCity(cityId, data)
    {
        try {
            const city=await City.update({
                where:{
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Error in the City Repository Layer");
            throw{error};
        }
    }
    async getCity(cityId)
    {
        try {
            const city=City.findByPK(cityId);
            return city;
        } catch (error) {
            console.log("Error in the City Repository Layer");
            throw{error};
        }
    }
}

module.exports=CityRepository;