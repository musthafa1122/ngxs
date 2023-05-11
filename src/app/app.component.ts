import { Component } from '@angular/core';
import { CounterStateModel } from './state/counter.state';
import { Store } from '@ngxs/store';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewSelectSnapshot(
    (state: { counter: CounterStateModel }) => state.counter.name
  )
  name!: string;
  @ViewSelectSnapshot(
    (state: { counter: CounterStateModel }) => state.counter.count
  )
  count!: number;

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }
}
