export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  console.log("tipo: "+JSON.stringify(handlers));
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
