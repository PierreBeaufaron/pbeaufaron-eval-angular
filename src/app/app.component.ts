import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";
import { NgIf } from '@angular/common';
import { CarService } from './services/car.service';
import { SearchComponent } from "./search/search.component";

export interface Car {
  idComp: number,
  brandComp: string,
  modelComp: string,
  descriptionComp: string,
  imageComp: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, TableComponent, NgIf, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private readonly carService = inject(CarService)
  
  isShowedCard: boolean = false
  selectedCar: any = null
  carsComp: Car[] = []

  ngOnInit(): void {
    this.carsComp = this.carService.getCars();
  }

  handleShowCard(id: number){
    this.selectedCar = this.carService.getCarById(id)
    this.isShowedCard = true
  }

  hideCard(id: number | null) {
    if (this.selectedCar.idComp === id) {
      this.isShowedCard = false
    }
  }
}
