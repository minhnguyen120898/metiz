
const initialState = {
    status: false
};

const i18Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_I18': {
            return {
                ...state,
                status : action.data,
            }
        }
        default: 
            return state;
    }
}

export default i18Reducer;