export function getAllProducts() {
  const apiURL = "https://mallory-furniture-admin.now.sh/api/v1/products";
  return fetch(apiURL);
}
