export const selectContact = (people) => {
  return {
    type: "SELECTED_CONTACT",
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

export const loadInitialContacts = () => {
  return (dispatch) => {
    fetch("http://192.168.1.6:3000/contact", {
      method: "GET",
      headers: {
        Accept: "application/Json",
        "content-Type": "application/Json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch({ type: "INITIAL_FETCH", payload: data }))
      .catch((e) => console.log(e));
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    fetch(`http://192.168.1.6:3000/contact/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        Accept: "application/Json",
        "content-Type": "application/Json",
      },
    })
      .then((response) => console.log(response))
      .then(() => dispatch({ type: "DELETE_CONTACT" }))
      .catch((e) => console.log(e));
  };
};
