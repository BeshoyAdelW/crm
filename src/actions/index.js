export const selectPerson = (people) => {
  return {
    type: "SELECTED_PERSON",
    selected: people,
  };
};

export const noneSelected = () => {
  return {
    type: "NONE_SELECTED",
  };
};
