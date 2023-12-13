import CarModel from '../models/CarModelMongoose.js';

const getAllCars = async (req, res) => {
  const result = await CarModel.find();
  return res.json(result);
};
const addCar = async (req, res) => {
  const result = await CarModel.create(req.body);
  return res.json(result);
};

export default { getAllCars, addCar };
