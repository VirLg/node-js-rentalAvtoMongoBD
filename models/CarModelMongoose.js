import { Schema, model } from 'mongoose';
import Joi from 'joi';

export const addCarJoiSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  type: Joi.string().required(),
  model: Joi.string().required(),
  img: Joi.string().required(),
  description: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  engineSize: Joi.string().required(),
  accessories: Joi.array().required(),
  functionalities: Joi.array().required(),
  rentalPrice: Joi.string().required(),
  rentalCompany: Joi.string().required(),
  address: Joi.string().required(),
  rentalConditions: Joi.string().required(),
  mileage: Joi.number().required(),
});

const carSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  type: String,
  img: String,
  description: String,
  fuelConsumption: String,
  engineSize: String,
  accessories: Array,
  functionalities: Array,
  rentalPrice: String,
  rentalCompany: String,
  address: String,
  rentalConditions: String,
  mileage: Number,
});

const CarModel = model('car', carSchema);
// car - назва кластеру в однині!

export default CarModel;
