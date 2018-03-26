// reducer function to handle multiple same type instances calls
export function createNamedWrapperReducer(reducerFunction, reducerName) {
  return(state, action) => {
    const {name} = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}
