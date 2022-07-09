import { ListenerFunction, State } from '@x-calendar/state';

const state = new State({});

const fn: ListenerFunction = (path, value) => {
  console.log('path, value');
};

state.subscribe('a', fn);
