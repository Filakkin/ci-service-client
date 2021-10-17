export const buildReducer = (state, action) => {
    switch (action.type) {
        case 'push':
            return [action.value, ...state];
        case 'add':
            return [...state, ...action.value];
        default:
    }
}