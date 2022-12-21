const { CityRepository } = require('../repository/index');
class CityService{
    constructor()
    {
        this.cityrepository=new CityRepository();
    }
    async createCity(data)
    {
        try {
            const city=await this.cityrepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }
    async deleteCity(cityId)
    {
        try {
            const response=await this.cityrepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }
    async updateCity(cityId,data)
    {
        try {
            const city= await this.cityrepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }
    async getCity(cityId)
    {
        try {
            const city= await this.cityrepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw{error};
        }
    }
}

module.exports=CityService;