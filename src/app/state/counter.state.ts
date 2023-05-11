import { Action, State, StateContext } from '@ngxs/store';

export class CounterStateModel {
  count!: number;
  name!: string;
}

@State<CounterStateModel>({
  name: 'counter',

  defaults: {
    count: 0,
    name: 'musthafa',
  },
})
export class CounterState {
  @Action({ type: 'increment' })
  increment(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ count: state.count + 1 });
  }

  @Action({ type: 'decrement' })
  decrement(ctx: StateContext<CounterStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ count: state.count - 1 });
  }
}
