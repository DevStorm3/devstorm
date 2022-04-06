import validator from "validator";
const passwordPettern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

export const formValidator = ({ name, value, userInput, error, setError }) => {
  if (name === "password") {
    let temp = { ...error };
    if (!passwordPettern.test(value)) temp = { ...temp, [name]: true };
    else temp = { ...temp, [name]: false };
    if (userInput.confirm_password && value !== userInput.confirm_password)
      temp = { ...temp, confirm_password: true };
    else temp = { ...temp, confirm_password: false };
    setError(temp);
  } else if (name === "confirm_password") {
    if (value !== userInput.password || !value)
      setError({ ...error, [name]: true });
    else setError({ ...error, [name]: false });
  } else if (name === "email") {
    if (!validator.isEmail(value)) setError({ ...error, [name]: true });
    else setError({ ...error, [name]: false });
  } else if (!value) setError({ ...error, [name]: true });
  else setError({ ...error, [name]: false });
};

// export const changePasswordValidate = (name, value) => {
//   console.log(name, value);
//   if (!value) {
//     if (name === "oldPassword") return "Old password can't be empty";
//     else if (name === "newPassword") return "New Password can't be empty";
//   } else {
//     if (name === "newPassword" && value.length < 6)
//       return "New Password can't be less then 6 character!";
//     if (name === "oldPassword" && value.length < 6)
//       return "Old Password can't be less then 6 character!";
//     return "";
//   }
// };

// export const validate = () => {
//   let input = [];
//   let errors = {};
//   let isValid = true;

//   if (!input["fname"]) {
//     isValid = false;
//     errors["fname"] = "Please enter your First Name.";
//   }
//   if (!input["lname"]) {
//     isValid = false;
//     errors["lname"] = "Please enter your Last Name.";
//   }
//   if (!input["postal"]) {
//     isValid = false;
//     errors["postal"] = "Please enter your Postal Code.";
//   }

//   if (!input["email"]) {
//     isValid = false;
//     errors["email"] = "Please enter your email Address.";
//   }

//   if (typeof input["email"] !== "undefined") {
//     var pattern = new RegExp(
//       /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
//     );
//     if (!pattern.test(input["email"])) {
//       isValid = false;
//       errors["email"] = "Please enter valid email address.";
//     }
//   }

//   if (!input["password"]) {
//     isValid = false;
//     errors["password"] = "Please enter your password.";
//   }
//   if (typeof input["password"] !== "undefined") {
//     var passPattern = new RegExp(
//       "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
//     );
//     if (!passPattern.test(input["password"])) {
//       isValid = false;
//       errors["password"] =
//         "Password should contain minimum eight characters, at least one upper case letter, one number and one special character.";
//     }
//   }

//   if (!input["confirm_password"]) {
//     isValid = false;
//     errors["confirm_password"] = "Please confirm password.";
//   }
//   if (typeof input["confirm_password"] !== "undefined") {
//     var conPassPattern = new RegExp(
//       "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
//     );
//     if (!conPassPattern.test(input["confirm_password"])) {
//       isValid = false;
//       errors["confirm_password"] =
//         "Password should contain minimum eight characters, at least one upper case letter, one number and one special character.";
//     }
//   }
//   if (!input["hasAgreed"]) {
//     isValid = false;
//     errors["hasAgreed"] = "Please accept privacy policy.";
//   }

//   if (
//     typeof input["password"] !== "undefined" &&
//     typeof input["confirm_password"] !== "undefined"
//   ) {
//     if (input["password"] !== input["confirm_password"]) {
//       isValid = false;
//       errors["password"] = "Passwords don't match.";
//     }
//   }

//   this.setState({
//     errors: errors,
//   });

//   return isValid;
// };
