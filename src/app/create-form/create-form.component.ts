import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export interface createCarFormContent {
    brand: string,
    model: string,
    description: string,
    image: string
}

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent implements OnInit {
  createCarForm: FormGroup
  formValid: boolean = true

  @Output() 
  newCarSubmitted: EventEmitter<createCarFormContent> = new EventEmitter<createCarFormContent>()

  @Output()
  closeCreateFormClicked: EventEmitter<void> = new EventEmitter<void>

  ngOnInit(): void {
    this.createCarForm = new FormGroup({
      brand: new FormControl('', [
        Validators.minLength(3), 
        Validators.required
      ]),
      model: new FormControl('', [
        Validators.minLength(2), 
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.minLength(50), 
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.minLength(3), 
        Validators.required
      ])
    })
  }

  onSubmitCreateCar() {
    if (this.createCarForm.valid) {
      const { brand, model, description, image } = this.createCarForm.value
      this.newCarSubmitted.emit({brand, model, description, image})
    } else {
      this.formValid = false
    }
  }

  OnClickCloseCreateForm() {
    this.closeCreateFormClicked.emit()
  }

}
