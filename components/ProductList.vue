<template>
  <ul>
    <li
      v-for="product in list"
      :key="product.id"
      class="item flex"
      @click="moveToDetail(product.id)"
    >
      <ProductDetail :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";

export default {
  components: { ProductDetail },
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`/product/${id}`);
    }
  },
}
</script>

<style>

</style>
