import moment from "moment";
import { createStore } from "redux";

const initialState = {
  data: [
    {
      startDate: new Date(),
      endDate: moment(new Date().setDate(new Date().getDate() + 1)).toDate(),
      key: "selection",
      perNight() {
        const range = this.endDate.getTime() - this.startDate.getTime();
        let total = range / (1000 * 3600 * 24);
        if (total === 0) {
          total = 1;
        }
        return total;
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BOOKING") {
    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === "INCREMENT_DAY") {
    const newArray = [...state.data];
    newArray[0].endDate = moment(
      newArray[0].endDate.setDate(newArray[0].endDate.getDate() + 1)
    ).toDate();
    return {
      data: newArray,
    };
  }
  if (action.type === "DECREMENT_DAY") {
    const newArray = [...state.data];
    newArray[0].endDate = moment(
      newArray[0].endDate.setDate(newArray[0].endDate.getDate() - 1)
    ).toDate();
    return {
      data: newArray,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
