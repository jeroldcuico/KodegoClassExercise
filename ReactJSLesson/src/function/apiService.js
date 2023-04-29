import apiConnection from "./apiConnection";
function apiService(path, formData, responseCallback, method = "GET") {
  const connection = apiConnection();

  if (method === "GET") {
    fetch(connection + path)
      .then((response) => response.json())
      .then((data) => {
        responseCallback(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    fetch(connection + path, {
      method: method,
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        responseCallback(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}

export default apiService;
