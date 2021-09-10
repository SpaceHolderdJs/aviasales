const idReducer = (state = "", action) => {
  switch (action.type) {
    case "INIT_ID":
      return action.payload;
    default:
      return state;
  }
};

export default idReducer;
