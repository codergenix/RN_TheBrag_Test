import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import CONFIG from '../../Utils/config';
//======================================================
// Redux Thunk action creator using createAsyncThunk
export const Giphylist = createAsyncThunk(
    'Giphylist',
    async (userdata, thunkAPI) => {
        try {
            // Making an HTTP GET request using axios
            let result = await axios({ method: 'get', baseURL: CONFIG.API_ENDPOINT, url: '/gifs/search', params: userdata });
            // Checking if the API response has a 'msg' property equal to "OK"
            if (result.data.meta?.msg == "OK") {
                return result.data;
            }
            else {
                //reject the promise if the response does not meet the expected criteria                
                return thunkAPI.rejectWithValue({ error: result.data });
            }
        } catch (error) {
            // reject the promise in case of an error during the API request        
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);
// Redux Thunk action creator using createAsyncThunk
export const GiphylistMore = createAsyncThunk(
    'GiphylistMore',
    async (userdata, thunkAPI) => {
        try {
            // Making an HTTP GET request using axios
            let result = await axios({ method: 'get', baseURL: CONFIG.API_ENDPOINT, url: '/gifs/search', params: userdata });
            // Checking if the API response has a 'msg' property equal to "OK"
            if (result.data.meta?.msg == "OK") {
                return result.data;
            }
            else {
                //reject the promise if the response does not meet the expected criteria                
                return thunkAPI.rejectWithValue({ error: result.data });
            }
        } catch (error) {
            // reject the promise in case of an error during the API request        
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);
// Define the mainSlice
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
        // Reducer for updating state based on payload
        updateState: (state, { payload }) => {
            state.isFetching = payload.isFetching !== undefined ? payload.isFetching : state.isFetching;
            state.isError = payload.isError !== undefined ? payload.isError : state.isError;
            state.errorMessage = payload.errorMessage !== undefined ? payload.errorMessage : state.errorMessage;
            //-------
            return state;
        },
    },
    extraReducers: (builder) => {
        // Handling fulfilled, rejected, and pending actions for Giphylist
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
        // Handling fulfilled, rejected, and pending actions for GiphylistMore
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
// Export actions and selector
export const { updateState, } = mainSlice.actions;
export const mainSelector = (state) => state.main;


