import axios from "axios";

const base_url = "http://3.140.210.76:8000/api/";

export const signUpRequest = async (data) => {
  try {
    const response = await axios.post(base_url + "user/", data);

    if (response.data.message === "A user with the email already exist!") {
      alert("email already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

export const logInRequest = async (data) => {
  let response;
  try {
    response = await axios.post(base_url + "token/", data);

    if (response.status === 200) {
      return true;
    } else if (response.status === 401) return false;
    else return null;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) return false;
  }
};
