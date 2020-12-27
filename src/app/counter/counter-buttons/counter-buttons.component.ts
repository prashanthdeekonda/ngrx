import { increment, decrement, reset } from './../store/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../store/counter.store';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: Counter }>) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
