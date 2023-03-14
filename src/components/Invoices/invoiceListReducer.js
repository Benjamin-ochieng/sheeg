import produce from 'immer';

const SELECT_INVOICE = 'INVOICES::SELECT_INVOICE';
const DESELECT_INVOICE = 'INVOICES::DESELECT_INVOICE';
const DESELECT_ALL_INVOICES = 'INVOICES::DESELECT_ALL_INVOICES';

const defaultState = {
  selectedInvoices: [],
};

const reducerL = (state = defaultState, { type, payload } = {}) =>
  type
    ? // eslint-disable-next-line consistent-return
      produce(state, (draft) => {
        switch (type) {
          case SELECT_INVOICE:
            draft.selectedInvoices.push(payload);
            break;
          case DESELECT_INVOICE:
            draft.selectedInvoices.splice(
              draft.selectedInvoices.indexOf(payload),
              1,
            );
            break;
          case DESELECT_ALL_INVOICES:
            // eslint-disable-next-line no-param-reassign
            draft.selectedInvoices = [];
            break;
          default:
            // eslint-disable-next-line consistent-return
            return state;
        }
      })
    : defaultState;

export default reducerL;
