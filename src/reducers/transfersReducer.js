const transfersReducer = (data = "all", action) => {
  switch (action.type) {
    case "UPDATE_TRANSFER":
      return action.payload;

    default:
      return data;
  }
};

export default transfersReducer;
