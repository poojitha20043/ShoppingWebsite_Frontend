import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// Products APIs - ADD THESE!
export const getProducts = () => API.get('/products');
export const getProductById = (id) => API.get(`/products/${id}`);
export const searchProducts = (query) => API.get(`/products/search?q=${query}`);
export const getProductsByCategory = (category) => API.get(`/products/category/${category}`);

// Admin APIs (for future)
export const createProduct = (productData) => API.post('/products', productData);
export const updateProduct = (id, productData) => API.put(`/products/${id}`, productData);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export default API;