import { handleHttpResponse, handleError } from "./clientUtils";
const baseUrl = "http://localhost:8080/";

export function getUsers(pageNumber, lastName, age, sortKey, sortDirection) {
  let userServiceUrl = baseUrl + "users?";
  userServiceUrl = pageNumber
    ? userServiceUrl + "pageNumber=" + pageNumber
    : userServiceUrl + "pageNumber=0";
  userServiceUrl = lastName
    ? userServiceUrl + "&lastName=" + lastName
    : userServiceUrl;
  userServiceUrl = age ? userServiceUrl + "&age=" + age : userServiceUrl;
  userServiceUrl = sortKey
    ? userServiceUrl + "&sortKey=" + sortKey
    : userServiceUrl;
  userServiceUrl = sortDirection
    ? userServiceUrl + "&sortDirection=" + sortDirection
    : userServiceUrl;
  console.log("userServiceUrl" + userServiceUrl);
  return fetch(userServiceUrl).then(handleHttpResponse).catch(handleError);
}
