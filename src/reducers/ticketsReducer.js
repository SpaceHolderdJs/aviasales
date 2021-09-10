const ticketsReducer = (data = [], action) => {
  switch (action.type) {
    case "INIT_TICKETS":
      return action.payload;
    default:
      return data;
  }
};

export default ticketsReducer;
