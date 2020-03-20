import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/clubs/";
const baseUrl = "http://localhost:3001/clubs/";

export function getClubs() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
