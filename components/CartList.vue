<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cart in cartItmes" :key="cart.id" class="list-item">
        <img class="thumbnail" :src="cart.imageUrl" :alt="cart.name" />
        <div class="description">
          <p>{{ cart.name }}</p>
          <span>{{ cart.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>import { ACTIONS } from "~/store";

export default {
  // Not Page Component이지만 SSR을 위한 옵션
  // asyncData()와 동작 방식에 차이가 있으니 문서를 잘 살펴보도록 한다.
  async fetch() {
    // 최초 진입 시 this는 Server,
    // 다른 라우트에서 진입 시 this는 Vue Component를 가리킨다.
    console.log(this);
    await this.$store.dispatch(ACTIONS.FETCH_CART_ITEMS);
  },
  computed: {
    cartItmes() {
      return this.$store.state.cartItems;
    },
  }
};
</script>
