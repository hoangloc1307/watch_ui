import { configureStore } from '@reduxjs/toolkit';

import popUpSlice from './slices/popUp.slice';

export default configureStore({
    reducer: {
        popup: popUpSlice,
    },
});
