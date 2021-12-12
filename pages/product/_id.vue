<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItem, fetchProductById } from "@/api";
import { MUTATIONS } from "~/store";

export default {
  async asyncData({ params }) {
    return {
      product: (await fetchProductById(params.id)).data
    };
  },
  head() {
    return {
      title: `Item Detail - ${this.product.name}`,
      htmlAttrs: { lang: 'en' },
      meta: [
        { hid: 'description', name: 'description', content: `Item Detail 😎 ${this.product.name}` },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '상품 상세 페이지'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Item Detail 😎 ${this.product.name}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.imageUrl
        },
      ]
    };
  },
  methods: {
    async addToCart() {
      const { data } = await createCartItem(this.product);
      this.$store.commit(MUTATIONS.ADD_CART_ITEM, data);
      this.$router.push("/cart");
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
