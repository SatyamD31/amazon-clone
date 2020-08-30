// data layer logic gooes here
export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => (
// reduce takes a function
    basket?.reduce((amount, item) => item.price + amount, 0)
);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],  // preserve the basket contents and add further 
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            // if index is -1, basket is empty
            // check if any basket id is found equal to action id
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                // item exists, remove it
                // go to the item at returned index and remove 1 item
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Can't remove product (id: ${action.id}) as it is not there in the basket`);
            }
            return { 
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;