import listReducer from '../components/Invoices/invoiceListReducer';
import queryReducer from '../components/Invoices/invoicesQueryReducer';
import { mergeReducers } from '../utils';
import useReducer from '../composables/useReducer';

const rootReducer = mergeReducers(queryReducer, listReducer);
const [state, dispatch] = useReducer(rootReducer);

export default { state, dispatch };
