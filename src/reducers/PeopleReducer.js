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
    case "SELECTED_CONTACT":
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
    case "ADD_CONTACT":
      return {
        ...state,
        ...action.newPerson,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        ...action.newPerson,
      };
    default:
      return state;
  }
};
