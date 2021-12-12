<template>
  <aside class="cart-wrapper">
    <button class="btn" @click="moveToCartPage">Cart</button>
  </aside>
</template>

<script>
export default {
  methods: {
    moveToCartPage() {
      this.$router.push("/cart");
    }
  },
};
</script>
