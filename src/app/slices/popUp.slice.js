import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: false,
    cart: false,
    profile: false,
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        hideAllPopUp: (state, action) => {
            Object.keys(state).forEach(key => {
                if (state[key]) {
                    state[key] = false;
                }
            });
        },
        togglePopUp: (state, action) => {
            const { popUp, show } = action.payload;

            if (show) {
                state[popUp] = false;
            } else {
                popUpSlice.caseReducers.hideAllPopUp(state);
                state[popUp] = true;
            }
        },
    },
});

export const { hideAllPopUp, togglePopUp } = popUpSlice.actions;

export default popUpSlice.reducer;
