<template>
  <section class="app">
    <main>
      <!-- <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword" /> -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
      <ProductList :list="products" />
      <CartIndicator />
    </main>
  </section>
</template>

<script>
import axios from "axios";

import ProductList from "@/components/ProductList.vue";
import SearchInput from "@/components/SearchInput.vue";
import CartIndicator from "~/components/CartIndicator.vue";

import { fetchProductsByKeyword } from "@/api";
import { mapRandomImageUrl } from "~/utils/mapper";

// CSR Rule
// export default {
//   data() {
//     return {
//       products: [],
//     };
//   },
//   async created() {
//     const { data } = await axios.get("http://localhost:3000/products");
//     this.products = data;
//   }
// }

// SSR Rule
export default {
  components: {
    ProductList,
    SearchInput,
    CartIndicator
  },
  // data() 보다 먼저 선언되어야 한다.
  // 반드시 pages 디렉토리 하위 페이지 컴포넌트에서만 호출할 수 있다.
  // 이 말인즉슨, props를 사용하는 구조로 작성되겠다.
  async asyncData() {
    const { data } = await axios.get("http://localhost:3000/products");
    return {
      products: data.map(mapRandomImageUrl),
    };
  },
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    // searchInput에서 v-model를 사용하지 않았을 경우 필요한 함수
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword;
    // },
    async searchProducts() {
      const { data } = await fetchProductsByKeyword(this.searchKeyword);
      this.products = data.map(mapRandomImageUrl);
    },
  },
}
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
