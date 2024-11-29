import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonButton, IonText, IonThumbnail} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonList, IonLabel, IonItem, IonButton, IonText, IonThumbnail, IonToolbar, CommonModule, FormsModule]
})
export class CarDetailsPage implements OnInit {
  car: any;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.car = this.carService.getCars().find(c => c.id === +carId);
    }
  }
}
