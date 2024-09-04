import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuanity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );

      if (!existingItem) {
        state.cartItems.push({
          _id: newItem._id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {

        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalQuanity++;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },
    deleteItem(state, action) {
      // ID sản phẩm cần xóa
      const deleteItemId = action.payload;

      // Tìm sản phẩm trong giỏ hàng
      const deleteItemIndex = state.cartItems.findIndex(
        (item) => item._id === deleteItemId
      );

      if (deleteItemIndex !== -1) {
        const deletedItem = state.cartItems[deleteItemIndex];

        // Giảm tổng số lượng bằng số lượng sản phẩm bị xóa
        state.totalQuanity -= deletedItem.quantity;

        // Cập nhật tổng giá bằng tổng giá trừ đi tổng giá sản phẩm bị xóa
        state.totalAmount -= deletedItem.totalPrice;

        // Xóa sản phẩm khỏi mảng
        state.cartItems.splice(deleteItemIndex, 1);
      }
    },
    decreaseItem(state, action) {
      const decreaseItemId = action.payload;
      const itemToDecrease = state.cartItems.find(
        (item) => item._id === decreaseItemId
      );

      if (itemToDecrease) {
        if (itemToDecrease.quantity > 1) {
          // Nếu số lượng sản phẩm lớn hơn 1, giảm đi 1
          itemToDecrease.quantity--;
          itemToDecrease.totalPrice =
            Number(itemToDecrease.totalPrice) - Number(itemToDecrease.price);
        } else {
          // Nếu số lượng sản phẩm bằng 1, xóa sản phẩm khỏi giỏ hàng
          const itemIndex = state.cartItems.indexOf(itemToDecrease);
          state.cartItems.splice(itemIndex, 1);
        }

        // Cập nhật tổng số lượng và tổng giá
        state.totalQuanity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.totalPrice),
          0
        );
      }
    },

    clearCart(state) {
      // Xóa tất cả sản phẩm khỏi giỏ hàng
      state.cartItems = [];
      state.totalQuanity = 0;
      state.totalAmount = 0;
    }

  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
