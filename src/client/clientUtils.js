export async function handleHttpResponse(httpResponse) {
  if (httpResponse.status === 200) {
    return httpResponse.json();
  } else if (httpResponse.status === 400) {
    const errorMessage = await httpResponse.text();
    throw new Error(errorMessage);
  } else if (httpResponse.status === 500) {
    // For security reasons do not expose server-side error message
    throw new Error("Internal server error.");
  } else {
    throw new Error("Error while calling the service");
  }
}

export function handleError(error) {
  console.error("Error while calling the service." + error);
  throw error;
}
