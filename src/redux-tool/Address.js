import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.zeroarmario.com/',
});

const Address = createSlice({
    name: 'Address',
    initialState: {
        category: null,
        subCategory: '',
        status: 'idle',
        error: null
    },
    reducers: {
        loading: (state) => {
            state.registerStatus = 'loading';
        },    
    },
});


export const {loading, cretedSuccess, CreatedFailed} = Address.actions;


export const createAddress = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/address', subcategoryDatas)
        .then((response) => {
          dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const getAddress = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/address', subcategoryDatas)
        .then((response) => {
          dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const getOrderById = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/orders', subcategoryDatas)
        .then((response) => {
          dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const updateOrder = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/orders', subcategoryDatas)
        .then((response) => {
          dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          dispatch(CreatedFailed(error.message));
        });
    };
  };
