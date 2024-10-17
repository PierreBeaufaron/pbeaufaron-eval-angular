import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Car } from '../app.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup
  formValid: boolean = true
  car: Car[]

  @Output() searchCar: EventEmitter<{search: string}> = new EventEmitter<{search: string}>()

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [
        Validators.minLength(3), 
        Validators.required
      ])
    })
  }

  onSubmitSearch() {
    if (this.searchForm.valid) {
      const { search } = this.searchForm.value
      this.searchCar.emit({search})
    } else {
      this.formValid = false
    }
  }

  

}
