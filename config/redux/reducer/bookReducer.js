const bookState = {
  bookingData: {
    firstname: "",
    lastname: "",
    item: "",
    bookingStartDate: "",
    bookingEndDate: "",
    email: "",
    bankFrom: "",
    duration: "",
    accountHolder: "",
    phoneNumber: "",
    image: "",
  },
};

const bookReducer = (state = bookState, action) => {
  if (action.type === "BOOKING_CHECKOUT") {
    return {
      ...state,
      bookingData: {
        ...state.bookingData,
        [action.name]: action.value,
      },
    };
  }
  return state;
};

export default bookReducer;
