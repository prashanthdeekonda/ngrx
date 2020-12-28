import { customIncrement, customDecrement } from './../store/counter.actions';
import { Counter } from './../store/counter.store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;

  constructor(private store: Store<{ counter: Counter }>) {}

  ngOnInit(): void {}

  onAdd() {
    if (this.value) {
      this.store.dispatch(customIncrement({ value: +this.value }));
    }
  }

  onSub() {
    if (this.value) {
      this.store.dispatch(customDecrement({ value: +this.value }));
    }
  }
}
