const express=require('express');
const router = express.Router();


const CityController=require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/allcities',CityController.createAll);
router.get('/allairports/:id',CityController.getAllAirports);


router.post('/airports',AirportController.create);


router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/allflights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);

module.exports=router;