// import { describe, expect, test } from 'vitest';
// import { reducerQ, defaultState } from './invoicesQueryReducer';

// describe('filter invoice reducer', () => {
//   test('with no arguments, it returns a valid initial state', () => {
//     expect(reducerQ()).toEqual(defaultState);
//   });

//   test('with all arguments, it returns a valid  state', () => {
//     expect(
//       reducerQ(
//         { status: 'Due' },
//         { type: 'INVOICE::SET_FILTER', payload: 'All' },
//       ),
//     ).toEqual({
//       status: 'All',
//     });
//   });

//   test('with all arguments, it returns a valid  state', () => {
//     expect(
//       reducerQ(
//         { status: 'All' },
//         { type: 'INVOICE::SET_FILTER', payload: 'Paid' },
//       ),
//     ).toEqual({
//       status: 'Paid',
//     });
//   });

//   test('with all arguments, it returns a valid  state', () => {
//     expect(
//       reducerQ({ status: 'draft' }, { type: 'INVOICE::RESET_FILTER' }),
//     ).toEqual(defaultState);
//   });
// });
