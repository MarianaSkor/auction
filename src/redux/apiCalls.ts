import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL, userRequest } from "src/constants";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const login = async (dispatch: Dispatch<unknown>, user: any) =>  {
  dispatch(loginStart());

  try {
    const {data} = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(data))
  } catch(err) {
  dispatch(loginFailure());
  }
}

export const getProducts = async (dispatch: Dispatch<unknown>) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id: string, dispatch: Dispatch<unknown>) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id: string, product: any, dispatch: Dispatch<unknown>) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product: any, dispatch: Dispatch<unknown>) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};