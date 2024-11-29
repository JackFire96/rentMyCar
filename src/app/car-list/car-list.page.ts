import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonButton, IonText, IonThumbnail } from '@ionic/angular/standalone';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonList, IonLabel, IonItem, IonButton, IonText, IonThumbnail, IonToolbar, CommonModule, FormsModule]
})
export class CarListPage implements OnInit{
  cars:{id: number;
    brand: string;
    model: string;
    immatriculation: string;
    image1: string;
    image2: string;}[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }
}
