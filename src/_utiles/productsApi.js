import axiosClient from "./axiosClient";

const getAllProducts = ()=> axiosClient.get('/products');
const getOneProduct = (id)=> axiosClient.get(`/products/${id}`);
const getProductByCategory = (category)=> axiosClient.get(`/products/category/${category}`);
const sortProducts = (type)=> axiosClient.get(`/products?sort=${type}`);
const sumbitNewOrder = (payload)=> axiosClient.post(`/products` , payload);

export default{
    getAllProducts,
   getOneProduct, 
   getProductByCategory,
   sortProducts,
   sumbitNewOrder

}