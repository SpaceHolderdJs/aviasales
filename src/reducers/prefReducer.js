const prefReducer = (data = "optimal", action) => {
  switch (action.type) {
    case "UPDATE_PREF":
      return action.payload;

    default:
      return data;
  }
};

export default prefReducer;
