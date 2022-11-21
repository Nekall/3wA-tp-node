export const signUpValidators = ({
  firstName,
  lastName,
  email,
  password,
  password_confirm,
}) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let errors = {
    noErrors: true,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  if (email != "") {
    if (!email.match(regex)) {
      errors.email = "Format of the email is not correct.";
      errors.noErrors = false;
    }
  } else {
    errors.email = "Email cannot be empty.";
    errors.noErrors = false;
  }

  if (password != "") {
    if (password != password_confirm) {
      errors.password = "Passwords do not match.";
      errors.noErrors = false;
    }
  } else {
    errors.password = "Password cannot be empty.";
    errors.noErrors = false;
  }

  if (firstName === "") {
    errors.firstName = "FirstName cannot be empty.";
    errors.noErrors = false;
  }

  if (lastName === "") {
    errors.lastName = "LastName cannot be empty.";
    errors.noErrors = false;
  }

  return errors;
};

export const loginValidators = ({ email, password }) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let errors = {
    noErrors: true,
    email: "",
    password: "",
  };

  if (email != "") {
    if (!email.match(regex)) {
      errors.email = "Format of the email is not correct.";
      errors.noErrors = false;
    }
  } else {
    errors.email = "Email cannot be empty.";
    errors.noErrors = false;
  }

  if (password === "") {
    errors.password = "Password cannot be empty.";
    errors.noErrors = false;
  }

  return errors;
};
