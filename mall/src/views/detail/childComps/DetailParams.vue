<template>
  <div v-if="Object.keys(params).length!==0" class="params-info">
    <p>参数信息</p>
    <table>
      <tr v-for="(item1,index1) in params.sizeChart[0]" :key="index1">
        <td v-for="(item2,index2) in item1" :key="index2">{{item2}}</td>
      </tr>
    </table>

    <table class="set">
      <tr v-for="(item,index) in params.set" :key="index">
        <td class="params-key">{{item.key}}</td>
        <td class="params-value">{{item.value}}</td>
      </tr>
    </table>

    <div v-if="images.length!==0" class="params-img">
      <img :src="params.images" alt />
    </div>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  data() {
    return {
      images: []
    };
  },
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    params() {
      this.images = this.params.images;
    }
  }
};
</script>
<style scoped>
.params-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info p {
  font-size: 15px;
  margin-bottom: 10px;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.params-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.params-value {
  color: #eb4868;
}
.params-img img {
  width: 100%;
}
</style>