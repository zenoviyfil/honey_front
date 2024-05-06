import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { honey } from 'modules/cart/images';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        id: 1,
        title: 'Мед квітковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 100,
      },
      {
        id: 2,
        title: 'Мед з волоськимим горіхами',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 200,
      },
      {
        id: 3,
        title: 'Мед акацієвий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 100,
      },
      {
        id: 4,
        title: 'Мед ріпаковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 500,
      },
      {
        id: 5,
        title: 'Мед соняшниковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 250,
      },
    ],
  },
  reducers: {
    addOrUpdateProduct(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    removeAllProducts(state) {
      state.products = [];
    },
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectTotalPrice: (state) =>
      state.products.reduce((acc, el) => {
        return acc + el.price * el.quantity;
      }, 0),
    selectProductsQuantity: (state) => state.products.length,
  },
});

export const {
  addOrUpdateProduct,
  deleteProduct,
  decreaseQuantity,
  removeAllProducts,
} = cartSlice.actions;

export const { selectProducts, selectTotalPrice, selectProductsQuantity } =
  cartSlice.selectors;

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
