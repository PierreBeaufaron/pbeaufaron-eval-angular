import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";
import { NgIf } from '@angular/common';
import { CarService } from './services/car.service';
import { SearchComponent } from "./search/search.component";
import { CreateFormComponent } from "./create-form/create-form.component";

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
  imports: [RouterOutlet, CardComponent, TableComponent, NgIf, SearchComponent, CreateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private readonly carService = inject(CarService)

  private nextId: number = 11
  
  isShowedCard: boolean = false
  selectedCar: any = null
  cars: Car[] = []
  isHiddenCreateForm: boolean = true

  ngOnInit(): void {
    this.cars = this.carService.getCars()
  }

  showResult(searchObject: { search: string }) {
    const searchString = searchObject.search.toLowerCase()
    this.cars = this.carService.getCars().filter(car => 
      car.brandComp.toLowerCase().includes(searchString) || 
      car.modelComp.toLowerCase().includes(searchString)
    )
  }

  handleShowCard(id: number){
    this.selectedCar = this.cars.find(car => car.idComp === id);
    if (this.selectedCar) {
      this.isShowedCard = true;
    }
  }

  hideCard(id: number | null) {
    if (this.selectedCar && this.selectedCar.idComp === id) {
      this.isShowedCard = false
      this.selectedCar = null
    }
  }

  showCreateForm() {
    this.isHiddenCreateForm = false
  }

  closeCreateForm() {
    this.isHiddenCreateForm = true
  }

  addCar(newCar: { brand: string, model: string, description: string, image: string }) {
    const newCarToAdd: Car = {
      idComp: this.nextId++,
      brandComp: newCar.brand,
      modelComp: newCar.model,
      descriptionComp: newCar.description,
      imageComp: newCar.image
    };
    
    this.cars = [...this.cars, newCarToAdd];
    this.closeCreateForm();
  }
}
