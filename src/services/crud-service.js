class CrudService{
    constructor(repository)
    {
        this.repository=repository;
    }
    async create(data)
    {
        try {
            const response = await this.repository.create(data); 
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw error;
        }
    }

    async get(id)
    {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw error;
        }
    }

    async getAll()
    {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw error;
        }
    }

    async destroy(id)
    {
        try {
            await this.repository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw error;
        }
    }

    async update(modelId, data)
    {
        try {
            const result = await this.repository.update(modelId, data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw error;
        }
    }
}
module.exports=CrudService;