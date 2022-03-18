import callAPI from "../config/api";
const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_API;
const VER_API = process.env.NEXT_PUBLIC_API_VER;
export const getLandinPage = async () => {
  const endPoint = "landing-page";
  const url = `${ROOT_URL}/${VER_API}/${endPoint}`;
  const response = await callAPI({
    method: "get",
    url,
  });

  return response;
};
