<template>
  <article>
    <img class="product-image" :src="product.imageUrl" :alt="product.name">
    <p>{{ product.name }}</p>
    <span>{{ product.price }}</span>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
};
</script>
