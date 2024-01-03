import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import CONFIG from '../../Utils/Config';

//======================================================
//----- Signin and profile data
export const Giphylist = createAsyncThunk(
    'Giphylist',
    async (userdata, thunkAPI) => {
        try {
            let result = await axios({ method: 'get', baseURL: CONFIG.API_ENDPOINT, url: '/gifs/search', params: userdata });
            // console.log('Giphylist result.data >>', result.data);
            if (result.data.meta?.msg == "OK") {
                return result.data;
            }
            else {
                console.log('[Giphylist] result.data >>', result.data);
                return thunkAPI.rejectWithValue({ error: result.data });
            }
        } catch (error) {
            console.log('try catch [ Giphylist ] error.message >>', error.message);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);
export const GiphylistMore = createAsyncThunk(
    'GiphylistMore',
    async (userdata, thunkAPI) => {
        try {
            let result = await axios({ method: 'get', baseURL: CONFIG.API_ENDPOINT, url: '/gifs/search', params: userdata });
            // console.log('GiphylistMore result.data >>', result.data);
            if (result.data.meta?.msg == "OK") {
                return result.data;
            }
            else {
                console.log('[GiphylistMore] result.data >>', result.data);
                return thunkAPI.rejectWithValue({ error: result.data });
            }
        } catch (error) {
            console.log('try catch [ GiphylistMore ] error.message >>', error.message);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        GiphylistData: [],
        GiphylistCount: 15,
        GiphylistOfset: 0,
        //----------     
        isFetching: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        updateState: (state, { payload }) => {
            state.isFetching = payload.isFetching !== undefined ? payload.isFetching : state.isFetching;
            state.isError = payload.isError !== undefined ? payload.isError : state.isError;
            state.errorMessage = payload.errorMessage !== undefined ? payload.errorMessage : state.errorMessage;
            //-------
            return state;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(Giphylist.fulfilled, (state, { payload }) => {
            try {
                state.GiphylistData = payload.data;
                state.GiphylistCount = payload.pagination?.total_count;
                state.GiphylistOfset = state.GiphylistData.length;

                state.isFetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                state.isError = true;
                state.errorMessage = error.message;
                console.log('Error: Giphylist.fulfilled try catch error >>', error);
            }
        }),
            builder.addCase(Giphylist.rejected, (state, { payload }) => {
                try {
                    state.GiphylistData = [];
                    state.isFetching = false;
                    state.isError = true;
                    (payload) ? state.errorMessage = (payload.error.err ? payload.error.err : payload.error) : state.errorMessage = "API Response Invalid. Please Check API";
                } catch (error) {
                    state.isError = true;
                    state.errorMessage = error.message;
                    console.log('Error: [Giphylist.rejected] try catch error >>', error);
                }
            }),
            builder.addCase(Giphylist.pending, (state) => {
                state.isFetching = true;
            })

        builder.addCase(GiphylistMore.fulfilled, (state, { payload }) => {
            try {
                let exist = [...state.GiphylistData];
                let reciveitems = _.unionBy(exist, payload.data, 'id');

                state.GiphylistData = reciveitems;
                state.GiphylistCount = payload.pagination?.total_count;
                state.GiphylistOfset = state.GiphylistData.length;

                state.isFetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                state.isError = true;
                state.errorMessage = error.message;
                console.log('Error: GiphylistMore.fulfilled try catch error >>', error);
            }
        }),
            builder.addCase(GiphylistMore.rejected, (state, { payload }) => {
                try {
                    state.GiphylistData = [];
                    state.isFetching = false;
                    state.isError = true;
                    (payload) ? state.errorMessage = (payload.error.err ? payload.error.err : payload.error) : state.errorMessage = "API Response Invalid. Please Check API";
                } catch (error) {
                    state.isError = true;
                    state.errorMessage = error.message;
                    console.log('Error: [GiphylistMore.rejected] try catch error >>', error);
                }
            }),
            builder.addCase(GiphylistMore.pending, (state) => {
                state.isFetching = true;
            })
    }
});

export const { updateState, } = mainSlice.actions;
export const mainSelector = (state) => state.main;


