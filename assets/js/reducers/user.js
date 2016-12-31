var user = typeof USER !== "undefined" ? USER : {};

export default (state = user, action) => {

  switch (action.type) {
    case "UPDATE_USER" :
      console.log("PAYLOAD", action.payload)

      var obj = {};
      obj[action.payload.field] = action.payload.data;

      state = {...state, ...obj};
      return state;
    default:
      return state;

  }

}
