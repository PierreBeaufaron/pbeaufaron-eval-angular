import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true})
  brand: string = ''
  @Input({required: true})
  model: string = ''
  @Input({required: true})
  description: string = ''
  @Input({required: true})
  image: string = ''
  @Input({required: true})
  id: number = 0

  @Output()
  hideCardClicked: EventEmitter<number | null> = new EventEmitter<number | null>()

  onClickHideCard(whatCard: number) {
    this.hideCardClicked.emit(whatCard)
  }

}
