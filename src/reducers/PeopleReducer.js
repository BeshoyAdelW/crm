const initialState = {
  detailView: false,
  personSelected: null,
  firstName: "",
  lastName: "",
  phone: "",
  company: "",
  project: "",
  notes: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        people: action.payload,
      };
    case "SELECTED_PERSON":
      return {
        ...state,
        detailView: true,
        personSelected: action.selected,
      };
    case "NONE_SELECTED":
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };
    case "NEW_CONTACT":
      return {
        ...state,
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        project: "",
        notes: "",
      };
    case "ADD_PERSON":
      return {
        ...state,
        ...action.newPerson,
      };
    default:
      return state;
  }
};
