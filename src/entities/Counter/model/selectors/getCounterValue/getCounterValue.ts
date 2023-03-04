import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../gerCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
