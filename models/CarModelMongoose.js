import { Schema, model } from 'mongoose';

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
