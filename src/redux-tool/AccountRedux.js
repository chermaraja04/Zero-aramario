import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.zeroarmario.com/',
});

const Account = createSlice({
    name: 'Account',
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


export const {loading} = Account.actions;


export const CreateNewAddress = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
          dispatch(loading());  
      api.post('api/accountInfo', subcategoryDatas)
        .then((response) => {
          // dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          // dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const getOrder = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/accountInfo', subcategoryDatas)
        .then((response) => {
          // dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          // dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const addressById = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/address', subcategoryDatas)
        .then((response) => {
          // dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          // dispatch(CreatedFailed(error.message));
        });
    };
  };


  export const updateAddress = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
    //   dispatch(createSubcategory());
  
      api.post('api/address', subcategoryDatas)
        .then((response) => {
          // dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          // dispatch(CreatedFailed(error.message));
        });
    };
  };

  export default Account.reducer;
