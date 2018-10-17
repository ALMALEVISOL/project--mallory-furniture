export function getAllProducts() {
  const apiURL = "https://mallory-furniture-admin.now.sh/api/v1/products";
  return fetch(apiURL);
}

export function getProductsWithFilter(...filters) {
  let apiURL;
  if (filters[0] !== null && filters[1] === null) {
    apiURL =
      "https://mallory-furniture-admin.now.sh/api/v1/products?category=" +
      filters[0];
  } else if (filters[0] === null && filters[1] === "onSale") {
    apiURL =
      "https://mallory-furniture-admin.now.sh/api/v1/products?onSale=true";
  } else if (filters[0] !== null && filters[1] !== undefined) {
    apiURL =
      "https://mallory-furniture-admin.now.sh/api/v1/products?category=" +
      filters[0] +
      "&" +
      filters[1] +
      "=true";
  } else {
    apiURL =
      "https://mallory-furniture-admin.now.sh/api/v1/products?category=" +
      filters[0];
  }

  return fetch(apiURL);
}
