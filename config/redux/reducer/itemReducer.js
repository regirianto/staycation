const itemState = {
  itemID: {},
};

const itemReducer = (state = itemState, action) => {
  if (action.type === "UPDATE_ITEM_ID") {
    return {
      ...state,
      itemID: action.payload,
    };
  }
  return state;
};

export default itemReducer;
