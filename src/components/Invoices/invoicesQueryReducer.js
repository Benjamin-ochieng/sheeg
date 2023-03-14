/* eslint-disable no-param-reassign */
import produce from 'immer';

const SET_FILTER = 'INVOICES::SET_FILTER';
const RESET_FILTER = 'INVOICES::RESET_FILTER';
const SET_SORT = 'INVOICES::SET_SORT';

export const defaultState = {
  queryParams: {
    status: 'all',
    sortLabel: 'Sort by',
    sortValue: null,
  },
};

const reducerQ = (state = defaultState, { type, payload } = {}) =>
  type
    ? // eslint-disable-next-line consistent-return
      produce(state, (draft) => {
        switch (type) {
          case SET_FILTER: {
            draft.queryParams.status = payload === 'all' ? '' : payload;
            break;
          }
          case RESET_FILTER: {
            draft.queryParams.status = '';
            break;
          }
          case SET_SORT: {
            draft.queryParams.sortLabel = payload.label;
            draft.queryParams.sortValue = payload.value;
            break;
          }
          default:
            return state;
        }
      })
    : defaultState;

export default reducerQ;
