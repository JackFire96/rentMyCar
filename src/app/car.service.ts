import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', immatriculation: 'QEGYJH', image1: '', image2: '' },
    { id: 2, brand: 'Ford', model: 'Mustang', immatriculation: 'KLKJHG', image1: '', image2: '' },
  ];

  getCars() {
    return this.cars;
  }

  addCar(car: any) {
    this.cars.push(car);
  }
}