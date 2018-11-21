export const testReducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST_STORE':
      return [{ test: 'success' }];
    default:
      return state;
  }
};
