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

export const createNewContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  notes,
}) => {
  return (dispatch) => {
    fetch("http://192.168.1.6:3000/contact", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        company,
        project,
        notes,
      }),
      headers: {
        Accept: "application/Json",
        "content-Type": "application/Json",
      },
    })
      .then((response) => console.log(response))
      .then(() => dispatch({ type: "NEW_CONTACT" }))
      .catch((e) => console.log(e));
  };
};
