/* eslint-disable prettier/prettier */
import * as types from './ActionTypes';

export const increment = (index) => ({
    index,
    type: types.INCREMENT,
});

export const decrement = (index) => ({
    index,
    type: types.DECREMENT,
});

export const add = (index) => ({
    index,
    type: types.ADD,
});

export const remove = (index) => ({
    index,
    type: types.REMOVE,
});
