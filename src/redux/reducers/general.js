const initialState = {
    user: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'SET_USER': {
        const { payload } = action;
        return {
            ...state,
            user: payload.user
        };
    }
    default:
        return state;
    }
};
