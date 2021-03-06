import React from 'react';
import { useUssrState, useWillMount, useUssrEffect } from '../../../src';
import { Apollo } from './Apollo';

const asyncFn = () => new Promise((resolve) => setTimeout(() => resolve({ value: 'Hello world', apollo: true }), 1000));

export const App = () => {
  const [state, setState] = useUssrState('appState.text', { value: 'i am test ', apollo: false });
  const effect = useUssrEffect('state');

  useWillMount(effect, () => asyncFn()
    .then(data => setState(data)));

  return (
    <div>
      <h1>{state.value}</h1>
      {state.apollo && <Apollo />}
    </div>
  );
};
