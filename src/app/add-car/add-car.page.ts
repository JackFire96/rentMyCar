import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonButton, IonText, IonThumbnail } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonList, IonButton, IonItem, IonLabel, IonText, IonThumbnail, IonToolbar, CommonModule, FormsModule]
})
export class AddCarPage {
  car = {
    brand: '',
    model: '',
    immatriculation: '',
    image1: '',
    image2: ''
  };

  constructor(private carService: CarService, private router: Router) {}

  onAddCar() {
    if (this.car.brand && this.car.model && this.car.immatriculation && this.car.image1 && this.car.image2) {
      this.carService.addCar(this.car);
      console.log('Nouvelle voiture ajoutée :', this.car);
      this.router.navigate(['/car-list']);
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
  }
}
