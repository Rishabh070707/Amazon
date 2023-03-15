export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, { ...action.item, qnt: 1 }],
      };

    case "REMOVE":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
  }

  return state;
};

export default reducer;
