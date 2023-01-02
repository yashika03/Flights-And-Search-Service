const express=require('express');
const router = express.Router();


const CityController=require('../../controllers/city-controller');
// console.log(req.body);
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/allcities',CityController.createAll);
router.get('/allairports/:id',CityController.getAllAirports);
module.exports=router;