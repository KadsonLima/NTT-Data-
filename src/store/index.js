import { configureStore } from '@reduxjs/toolkit';

import inputReducer from "../reducers/inputReducer";
import requestDataReducer from '../reducers/requestReducer';

export const store = configureStore({reducer:{inputReducer, requestDataReducer}});


