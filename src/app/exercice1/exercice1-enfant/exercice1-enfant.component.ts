import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public eventUpdateCptr: EventEmitter<number> = new EventEmitter();
  @Input() public compteur: number;

  constructor() { }

  ngOnInit() {
  }

  public updateCompteur(value: number): void {
    this.eventUpdateCptr.emit(value);
  }
}
