import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Car } from '../app.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  private readonly carService = inject(CarService)

  searchForm: FormGroup
  car: Car[]

  @Output() formSubmitted: EventEmitter<Car[]> = new EventEmitter<Car[]>()

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [
        Validators.minLength(3), 
        Validators.required
      ])
    })
  }

  onSubmitSearch() {
    const { search } = this.searchForm.value
    this.car = this.carService.getCars()
    this.car = this.car.filter(c => c.brandComp.toLowerCase().includes(search))
    this.formSubmitted.emit(this.car)
  }

}
