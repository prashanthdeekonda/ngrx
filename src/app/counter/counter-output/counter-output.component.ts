import { Counter } from './../store/counter.store';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<Counter>;

  constructor(private store: Store<{ counter: Counter }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
