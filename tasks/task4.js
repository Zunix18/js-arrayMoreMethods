function getMostFuelEfficientCars(cars, brand) {
  const allUnderSix = cars.every(car => car.fuelConsumption < 6);
  if (!allUnderSix) return [];

  const brandCars = cars.filter(car => car.brand === brand);
  if (brandCars.length === 0) return [];

  const minFuel = Math.min(...brandCars.map(car => car.fuelConsumption));
  return brandCars.filter(car => car.fuelConsumption === minFuel);
}

const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); 
console.log(getMostFuelEfficientCars(cars, 'Honda')); 
console.log(getMostFuelEfficientCars(cars, 'Audi'));  
console.log(getMostFuelEfficientCars(cars, 'Dodge'));  
console.log(getMostFuelEfficientCars(cars, 'Ford'));  

module.exports = getMostFuelEfficientCars;
