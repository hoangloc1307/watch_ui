import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navigation: false,
    items: {
        menu: false,
        cart: false,
        profile: false,
        search: false,
    },
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        hideAllPopUp: (state, action) => {
            Object.keys(state.items).forEach(key => {
                if (state.items[key]) {
                    state.items[key] = false;
                }
            });
        },
        togglePopUp: (state, action) => {
            const { popUp, show } = action.payload;

            if (show) {
                state.items[popUp] = false;
                document.body.style.overflow = 'unset';
            } else {
                popUpSlice.caseReducers.hideAllPopUp(state);
                state.items[popUp] = true;
                document.body.style.overflow = 'hidden';
            }
        },
        toggleNavigation: (state, action) => {
            state.navigation = action.payload;
        },
    },
});

export const { hideAllPopUp, togglePopUp, toggleNavigation } = popUpSlice.actions;

export default popUpSlice.reducer;
