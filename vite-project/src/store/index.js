import { configureStore } from '@reduxjs/toolkit';
import { projectSlice } from './project-slice';

const store = configureStore({
    reducer: {
        projectReducer: projectSlice.reducer,
    }
});

export default store;