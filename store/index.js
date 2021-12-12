import { fetchCartItems } from "~/api";
import { mapRandomImageUrl } from "~/utils/mapper";

export const ACTIONS = {
  FETCH_CART_ITEMS: "FETCH_CART_ITEMS",
};

export const MUTATIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  ADD_CART_ITEM: "ADD_CART_ITEM",
};

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  [MUTATIONS.SET_CART_ITEMS](state, cartItems) {
    state.cartItems = cartItems;
  },
  [MUTATIONS.ADD_CART_ITEM](state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    });
  }
};

export const actions = {
  // 서버 초기화를 수행하는 함수
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(ACTIONS.FETCH_CART_ITEMS);
  // },
  async [ACTIONS.FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems();
    commit(MUTATIONS.SET_CART_ITEMS, data.map(mapRandomImageUrl));
  },
};
