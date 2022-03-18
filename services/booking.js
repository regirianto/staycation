import callAPI from "../config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_API;
const VER_API = process.env.NEXT_PUBLIC_API_VER;

const getBankPayments = async () => {
  try {
    const url = `${ROOT_URL}/${VER_API}/bank`;
    const response = await callAPI({ method: "get", url });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const checkoutBook = async (data) => {
  try {
    const url = `${ROOT_URL}/${VER_API}/booking`;
    const response = await callAPI({ method: "post", url, data });
    return response;
  } catch (error) {
    return error;
  }
};

export { getBankPayments, checkoutBook };
