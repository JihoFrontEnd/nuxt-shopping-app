<template>
  <form class="input-wrapper flex" @submit.prevent="$emit('search')">
    <!-- <input :value="searchKeyword" type="text" @input="$emit('input', $event.target.value)"> -->
    <!--
      상위 컴포넌트에서 v-model로 연결하더라도 이벤트 등록이 필요하다.
      아래처럼 등록하지 않는다면 input의 value는 undefined가 된다.
      <input type="text"> => value: undefined
    -->
    <input class="search-input" type="text" @input="$emit('input', $event.target.value)">
    <input class="btn" type="submit" value="search">
  </form>
</template>

<script>
export default {
  // model을 사용하여 연결하는 방법도 존재한다.
  // model: {},

  // v-model을 사용할 경우 없어도 문제 없으나, value라는 값으로 변경하라고 안내한다.
  // props: {
  //   searchKeyword: {
  //     type: String,
  //     default: () => "",
  //   },
  // },
};
</script>

<style>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
