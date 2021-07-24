import { CartItem, ProductItem } from "../App";

type ACTIONTYPE =
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "ADD_ITEM"; payload: ProductItem }
  | { type: "SUBTRACT_ITEM"; payload: ProductItem };

export const reducer = (
  state: {
    items: CartItem[];
    totalAmount: number;
    totalItem: 0;
  },
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((currElement) => {
          return currElement.id !== action.payload;
        }),
      };

    case "ADD_ITEM":
      const exist = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (exist) {
        let updatedCart = state.items.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              qty: cartItem.qty + 1,
            };
          }
          return cartItem;
        });
        return { ...state, items: updatedCart };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
        };
      }
    case "SUBTRACT_ITEM":
      const itemexist = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemexist?.qty === 1) {
        const updatedCart = state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        return { ...state, items: updatedCart };
      } else {
        const updatedCart = state.items.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
        );
        return { ...state, items: updatedCart };
      }

    default:
      return state;
  }
};
