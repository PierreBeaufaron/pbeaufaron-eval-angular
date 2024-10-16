import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../app.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  @Input({required: true})
  cars: Array<Car> = []
  selectedCar: any = null
  
  // Tableau qui stocke la visibilité de chaque ligne
  visibleRows: boolean[] = []

  @Output()
  showCardClicked: EventEmitter<number> = new EventEmitter<number>()

  @Output()
  hideCardClicked: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit() {
    this.visibleRows = new Array(this.cars.length).fill(true);
  }

  onClickShowCard(id: number) {
    this.showCardClicked.emit(id)
  }

  onClickDelete(id:number, idComp: number) {
    this.hideCardClicked.emit(idComp)
    this.visibleRows[id] = false
  }

}
