import CarModel from '../models/CarModelMongoose.js';

export const getAllCars = async (req, res) => {
  const result = await CarModel.find();
  return res.json(result);
};
export default { getAllCars };
