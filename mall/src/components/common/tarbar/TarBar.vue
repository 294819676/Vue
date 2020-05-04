<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>
<style>
#tar-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.08);
  /* X平移量，Y平移量，模糊程度，颜色               透明度 */
}
</style>