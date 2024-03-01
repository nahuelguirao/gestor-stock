import { BASE_URL } from "./BASE_URL";

export const fetchProducts = async () => await fetch(`${BASE_URL}/products`);
