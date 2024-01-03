import { createAsyncThunk, createSlice,  } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import CONFIG from '../../Utils/config';
//======================================================
//----- Signin and profile data
export const Loginuser = createAsyncThunk(
    'Loginuser',
    async (userdata, thunkAPI) => {
        try {
            let result = await axios({ method: 'POST', withCredentials: false, url: `${CONFIG.API_ENDPOINT}login/login`, data: userdata });
            console.log('Loginuser result.data >>', result.data);
            if (result.data.success) {                
                return result.data.result;
            }
            else {                
                console.log('[Loginuser] result.data >>', result.data);
                return thunkAPI.rejectWithValue({ error: result.data });
            }


        } catch (error) {
            console.log('try catch [ Loginuser ] error.message >>', error.message);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        LoginData: {},

        //----------     
        isFetching: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {

        updateState: (state, { payload }) => {
            state.isLogin = payload.isLogin !== undefined ? payload.isLogin : state.isLogin;

            state.isFetching = payload.isFetching !== undefined ? payload.isFetching : state.isFetching;
            state.isError = payload.isError !== undefined ? payload.isError : state.isError;
            state.errorMessage = payload.errorMessage !== undefined ? payload.errorMessage : state.errorMessage;
            //-------
            return state;
        },
    },
    extraReducers: (builder) => {
        //========= Signin
        builder.addCase(Loginuser.fulfilled, (state, { payload }) => {
            try {
                state.LoginData = payload;
                state.isLogin = true;
                state.isFetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                state.isError = true;
                state.errorMessage = error.message;
                console.log('Error: Loginuser.fulfilled try catch error >>', error);
            }
        }),
            builder.addCase(Loginuser.rejected, (state, { payload }) => {
                try {
                    state.LoginData = {};
                    state.isLogin = false;
                    state.isFetching = false;
                    state.isError = true;
                    (payload) ? state.errorMessage = (payload.error.err ? payload.error.err : payload.error) : state.errorMessage = "API Response Invalid. Please Check API";
                } catch (error) {
                    state.isError = true;
                    state.errorMessage = error.message;
                    console.log('Error: [Loginuser.rejected] try catch error >>', error);
                }
            }),
            builder.addCase(Loginuser.pending, (state) => {
                state.isFetching = true;
            })

    }
});

export const { updateState, updatePostdata, resetstate } = mainSlice.actions;
export const NCCSelector = (state) => state.main;


