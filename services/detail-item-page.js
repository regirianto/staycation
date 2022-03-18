import callAPI from "../config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_API;
const VER_API = process.env.NEXT_PUBLIC_API_VER;

export const getDetailitem = async (id) => {
  try {
    const endPoint = `item/${id}`;
    const url = `${ROOT_URL}/${VER_API}/${endPoint}`;
    const response = await callAPI({ method: "get", url });
    return response;
  } catch (error) {
    return console.log(error);
  }
};
