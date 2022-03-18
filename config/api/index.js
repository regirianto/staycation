import axios from "axios";

const callAPI = async ({ method, url, data }) => {
  const response = await axios({ method, url, data }).catch((error) => {
    return error.response;
  });

  const responseAxios = response?.data;
  if (response.status < 300) {
    return responseAxios;
  }
  const res = {
    message: responseAxios.message ? responseAxios.message : "ERROR",
    error: responseAxios.error ? responseAxios.error : true,
    data: null,
  };

  return res;
};

export default callAPI;
