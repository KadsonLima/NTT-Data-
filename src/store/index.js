import { configureStore } from '@reduxjs/toolkit';

import inputReducer from "../reducers/inputReducer";
import requestDataReducer from '../reducers/requestReducer';
import movieReducer from '../reducers/movieReducer';

export const store = configureStore({reducer:{inputReducer, requestDataReducer, movie:movieReducer}});


