import { Counter } from './counter.store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector<Counter>('counter');

export const getCounter = createSelector(
  getCounterState,
  (state) => state.counter
);
