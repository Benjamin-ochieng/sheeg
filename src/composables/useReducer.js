import { ref, readonly } from 'vue';

const useReducer = (reducer, init) => {
  const state = ref(init ? init(reducer()) : reducer());
  const dispatch = (action) => {
    state.value = reducer(state.value, action);
  };
  return [readonly(state), dispatch];
};

export default useReducer;
