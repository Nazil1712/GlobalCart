export function fetchAllProductsAPI() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilterAPI(filter) {
  let queryString = "";

  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log(`http://localhost:8080/products?${queryString}`)
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/products?` + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductBySortAPI(filter) {
  let queryString = "";

  for (let key in filter) {
    queryString += `${key}=${filter[key]}`;
  }

  console.log(`http://localhost:8080/products?${queryString}`)

  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/products?` + queryString
    );
    const data = await response.json();
    console.log(data)
    resolve({ data });
  });

}
